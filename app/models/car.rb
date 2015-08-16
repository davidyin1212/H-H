class Car < ActiveRecord::Base
  # validates :name, :make, :model, :engine, :exterior, :interior, :delivery_kms, :stock_num, :msrp, :base_price, :status, presence: true
  belongs_to :user
  belongs_to :payment

  def self.removeCarFromUser(car)
    car.user = nil
    car.payment = nil
    car.charge_id = nil
    car.status = 0
    car.save
  end
end
