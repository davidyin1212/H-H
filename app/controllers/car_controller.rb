class CarController < ApplicationController
  # before_action :authenticate_user!

  module Status
    AVALIABLE = 0
    ORDER = 1
    PROGRESS = 2
    SHIPPED = 3
  end

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
    respond_with(@car)
  end

  def addToUser
    @car = Car.find(params[:car_id])
    @car.user_id = current_user.id
    @car.save
    respond_with(@car)
  end

  def carsOrdered
    @car = Car.find_by(status: Status::ORDER)
    respond_with(@car)
  end

  def carsInProgress
    @car = Car.find_by(status: Status::PROGRESS)
    respond_with(@car)
  end

  def carsShipped
    @car = Car.find_by(status: Status::SHIPPED)
    respond_with(@car)
  end
  
  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :make, :model, :engine, :exterior, :interior, :delivery_kms, :stock_num, :msrp, :additional_fees, :base_price, :status)
    end
end
