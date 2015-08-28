class UserPolicy < ApplicationPolicy
  attr_reader :user, :user

  def initialize(user, user_resource)
    @user = user
    @user_resource = user_resource
  end

  def index?
    @user.permissions.exists?(Permission.find_by(name:"UserPrivilege"))
  end

  def create?
    @user.permissions.exists?(Permission.find_by(name:"UserModifyPrivilege"))
  end

  def show?
    @user.permissions.exists?(Permission.find_by(name:"UserPrivilege"))
  end

  def destroy?
    @user.permissions.exists?(Permission.find_by(name:"UserModifyPrivilege"))
  end

end