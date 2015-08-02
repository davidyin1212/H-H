class Car < ActiveRecord::Base
  validates :name, :make, :model, :engine, :exterior, :interior, :delivery_kms, :stock_num, :msrp, :base_price, :status, presence: true
  belongs_to :user
end
