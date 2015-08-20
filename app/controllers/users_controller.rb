class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:update, :destroy, :show]

  def index
    admin = User.find_by(email: "admin@admin.com")
    @user = User.where.not(id: admin.id)
    puts @user[0].payment
    authorize @user
    respond_with @user
  end

  def create
    # user_params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    @user = User.create(user_params)
    params[:permissions].each do |arg|
      permission = Permission.find(arg[:id])
      if !(@user.permissions.include? permission)
        @user.permissions << Permission.find(permission[:id])
      end
    end
    authorize @user
    # @user.save
    respond_with @user
  end

  def update
    @user.update(user_params)
    respond_with @user
  end

  def destroy
    authorize @user

    @car = Car.where(user_id: @user.id)
    @car.each do |car|
      Car.removeCarFromUser(car)
    end
    @user.destroy
    respond_with @user
  end

  def show
    if params[:user_id].to_i == 0 then
      @user = current_user
    else
      @user = User.find(params[:id])
      authorize @user
    end
    respond_with @user
  end

  def getUserOfCar
    @car = Car.find(params[:car_id])
    @user = User.find(@car.user_id)
    respond_with @user
  end

  private
  	# Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
end
