class UsersController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_user, :set_permission, only: [:update, :destroy, :show]

  def index
    @user = User.all
    # authorize @user
    respond_with @user
  end

  def create
    # user_params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    @user = User.new(user_params)
    # authorize @user
    @user.save
    respond_with @user
  end

  def update
    @user.update(user_params)
    respond_with @user
  end

  def destroy
    # authorize @user
    @user.destroy
    respond_with @user
  end

  def show
    @user = User.find(params[:id])
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
