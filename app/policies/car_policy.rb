class CarPolicy < ApplicationPolicy
  attr_reader :user, :car

  def initialize(user, car)
    @user = user
    @car = car
  end

  def create?
  	@user.permissions.exists?(Permission.find_by(name:"CarModifyPrivilege"))
  end

  def update?
    @user.permissions.exists?(Permission.find_by(name:"CarModifyPrivilege"))
  end

  def destroy?
    @user.permissions.exists?(Permission.find_by(name:"CarModifyPrivilege"))
  end

  def userCars?
    @user.permissions.exists?(Permission.find_by(name:"QueryUserCarsPrivilege"))
  end

  def carsQuery?
    @user.permissions.exists?(Permission.find_by(name:"QueryCarPrivilege"))
  end

end