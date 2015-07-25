class UserPolicy < ApplicationPolicy
  attr_reader :user, :user

  def initialize(user, user_resource)
    @user = user
    @user_resource = user_resource
  end

  def index?
  end

  def create?
  end

  def destroy?
  end

end