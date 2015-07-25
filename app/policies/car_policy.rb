class CarPolicy < ApplicationPolicy
  attr_reader :user, :car

  def initialize(user, car)
    @user = user
    @car = car
  end

  def create?
  	@user.permissions.exists?(Permission.find_by(name:"CarCreate"))
  end

  def update?
  end

  def destroy?
  end

  def userCars?
  end

  def carsQuery?
  end

end