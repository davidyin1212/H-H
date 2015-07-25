class PermissionPolicy < ApplicationPolicy
  attr_reader :user, :permission

  def initialize(user, permission)
    @user = user
    @permission = permission
  end

  def index?
  end

  def create?
  end

  def update?
  end

  def destroy?
  end

  def permissionAccess?
  end

end