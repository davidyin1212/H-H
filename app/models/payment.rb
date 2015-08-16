class Payment < ActiveRecord::Base
  belongs_to :user

  attr_accessor :stripe_card_token

  def create_with_payment
    if valid?
      customer = Stripe::Customer.create(
        :card  => stripe_card_token
      ) 
      self.stripe_customer_token = customer.id
      self.save
    end
  end
end
