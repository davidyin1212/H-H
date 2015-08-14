class PermissionPolicy < ApplicationPolicy
  attr_reader :user, :permission

  def initialize(user, permission)
    @user = user
    @permission = permission
  end

  def index?
    @user.permissions.exists?(Permission.find_by(name:"PermissionPrivilege"))
  end

  def create?
    @user.permissions.exists?(Permission.find_by(name:"PermissionModifyPrivilege"))
  end

  def update?
    @user.permissions.exists?(Permission.find_by(name:"PermissionModifyPrivilege"))
  end

  def destroy?
    @user.permissions.exists?(Permission.find_by(name:"PermissionModifyPrivilege"))
  end

  def userPermissionAccess?
    @user.permissions.exists?(Permission.find_by(name:"PermissionPrivilege"))
  end

  def modifyUserPermissionAccess?
    @user.permissions.exists?(Permission.find_by(name:"ModifyUserPermissionPrivilege"))
  end
end