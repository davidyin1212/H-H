class Car < ActiveRecord::Base
  validates :name, :make, :model, :engine, :exterior, :interior, :delivery_kms, :stock_num, :msrp, :base_price, :status, presence: true
  belongs_to :user
  belongs_to :payment
  belongs_to :acq_agent, :class_name => 'User'
  belongs_to :acc_exc, :class_name => 'User'

  def self.removeCarFromUser(car)
    car.user = nil
    car.payment = nil
    car.charge_id = nil
    car.status = 0
    car.save
  end

  def self.getUserCar(user_id, current_user, has_full_dashboard_access, has_dashboard_access)
    car = Array.new
    if user_id == 0 
      if has_full_dashboard_access
        car.push(Car.where(user_id: current_user))
        car.push(Car.where(["status > :status", {status: 0}]))
        car.push(Car.where(acq_agent_id: current_user))
      else
        car.push(Car.where(user_id: current_user))
        car.push(Car.where(acc_exc_id: current_user))
        car.push(Car.where(acq_agent_id: current_user))
      end
    elsif has_full_dashboard_access
      car.push(Car.where(user_id: user_id))
      car.push(Car.where(acc_exc_id: user_id))
      car.push(Car.where(acq_agent_id: user_id))
    elsif has_dashboard_access
      car.push(Car.where(user_id: user_id, acc_exc_id: nil))
      car.push(Car.where(user_id: user_id, acc_exc_id: current_user))
      car.push([]);
    end
    return car
  end
end
