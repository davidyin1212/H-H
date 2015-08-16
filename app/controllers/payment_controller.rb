class PaymentController < ApplicationController
  def new

  end

  def edit
  end

  def create
    @payment = Payment.new()
    descriptionString = current_user.first_name.to_s + " " + current_user.last_name.to_s
    customer = Stripe::Customer.create(
      :source => params[:stripeToken],
      :description => descriptionString,
      :email => current_user.email
    )
    @payment.stripe_customer_token = customer.id
    @payment.user_id = current_user.id
    @payment.email = current_user.email
    @payment.save
    respond_with(@payment)
  end

  def show
    @payment = Payment.find(params[:id])
    @customer = Stripe::Customer.retrieve(@payment.stripe_customer_token)
  end

  def update
    @payment.update(params[:payment])
    @payment.update_with_payment
    respond_with(@payment)
  end

  def destroy
    @payment.destroy
    respond_with(@payment)
  end

  def getUserPaymentInfo
    @payment = Payment.where(user_id: params[:id])
    customer = Stripe::Customer.retrieve(@payment.stripe_customer_token)
    respond_with(customer.data)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment
      @payment = Payment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def payment_params
      params.require(:payment).permit(:stripe_customer_token)
    end
end
