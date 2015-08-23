class CarsController < ApplicationController
	before_action :authenticate_user!
  before_action :set_car, only: [:update, :destroy, :show]

  module Status
    AVALIABLE = 0
    ORDER = 1
    PROGRESS = 2
    SHIPPED = 3
  end

  def index
    @car = Car.where(status: Status::AVALIABLE)
    respond_with @car
  end

  def create
    @car = Car.new(car_params)
    @car.status = Status::AVALIABLE
    authorize @car
    @car.save
    respond_with(@car)
  end

  def update
    authorize @car
    @car.update(car_params)
    respond_with(@car)
  end

  def destroy
    authorize @car
    @car.destroy
    respond_with(@car)
  end

  def show
    @car = Car.find(params[:id])
    respond_with(@car)
  end

  def userCars
    #watch out for permissions issue
    if params[:user_id].to_i == 0 then
      @car = Car.where(user_id: current_user.id)
    else
      @car = Car.where(user_id: params[:user_id])
      authorize @car
    end

    respond_with(@car)
  end

  def addToUser
    @car = Car.find(params[:car_id])
    if @car.status = Status::AVALIABLE
      customer = Payment.find_by(user_id: current_user.id)
      begin
        charge = Stripe::Charge.create(
          :customer    => customer.stripe_customer_token,
          :amount      => 100,
          :description => 'Rails Stripe customer',
          :currency    => 'cad'
        )
        @car.user = current_user
        @car.status = Status::ORDER
        @car.charge_id = charge[:id]
        @car.save
      rescue Stripe::CardError => e
        # The card has been declined
        raise e
      end
    end
    respond_with(@car)
  end

  def removeFromUser
    @car = Car.find(params[:car_id])
    adminRemove = false
    if @car.user != current_user
      authorize @car
      adminRemove = true
    end
    if @car.status == Status::ORDER || adminRemove
      Car.removeCarFromUser(@car)
      ch = Stripe::Charge.retrieve(@car.charge_id)
      refund = ch.refunds.create
    end
    # @car.user = nil
    # @car.status = Status::AVALIABLE
    # @car.save
    respond_with(@car)
  end

  def carsAll
    @car = Car.all
    authorize @car, :carsQuery?
    respond_with(@car)
  end

  def carsOrdered
    @car = Car.where(status: Status::ORDER)
    authorize @car, :carsQuery?
    respond_with(@car)
  end

  def carsInProgress
    @car = Car.where(status: Status::PROGRESS)
    authorize @car, :carsQuery?
    respond_with(@car)
  end

  def carsShipped
    @car = Car.where(status: Status::SHIPPED)
    authorize @car, :carsQuery?
    respond_with(@car)
  end

  def carsUpdateToAvaliable
    @car = Car.find(params[:car_id])
    authorize @car, :carsQuery?
    @car.status = Status::AVALIABLE
    respond_with(@car)
  end

  def carsUpdateToOrdered
    @car = Car.find(params[:car_id])
    authorize @car, :carsQuery?
    @car.status = Status::ORDER
    respond_with(@car)
  end

  def carsUpdateToInProgress
    @car = Car.find(params[:car_id])
    authorize @car, :carsQuery?
    @car.status = Status::PROGRESS
    respond_with(@car)
  end

  def carsUpdateToShipped
    @car = Car.find(params[:car_id])
    authorize @car, :carsQuery?
    @car.status = Status::SHIPPED
    respond_with(@car)
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_car
      @car = Car.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def car_params
      params.require(:car).permit(:name, :make, :model, :engine, :exterior, :interior, :delivery_kms, :stock_num, :msrp, :additional_fees, :base_price, :status, :image_url, :price_over)
    end
end
