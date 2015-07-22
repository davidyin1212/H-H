class CarController < ApplicationController
  def index
    @car = Car.all
    respond_with(@car)
  end

  def create
    @car = Car.new(user_params)
    @car.save
    respond_with(@car)
  end

  def update
    @car.update(user_params)
    respond_with(@car)
  end

  def destroy
    @car.destroy
    respond_with(@car)
  end

  def show
    @car = Car.find(params[:id])
    respond_with(@car)
  end

  def userCars
    @car = Car.find_by(user_id: params[:user_id])
  end

  def addToUser
    @car = Car.find(params[:car_id])
    @car.user_id = current_user.id
    @car.save
  end

  def carsOrdered
  end

  def carsInProgress
  end

  def carsShipped
  end
  
  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :permission_lvl)
    end
end
