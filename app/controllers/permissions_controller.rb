class PermissionsController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_permission

  def index
  	@permission = Permission.all
    authorize @permission
  	respond_with @permission
  end

  def create
  	@permission = Permission.new(permission_params)
    authorize @permission
    @permission.save
    respond_with @permission
  end

  def destroy
    authorize @permission
  	@permission.destroy
  	respond_with @permission
  end

  def update
    authorize @permission
  	@permission.update(permission_params)
  	respond_with @permission
  end

  def addToUser
  	@user = User.find(params[:user_id])
  	@permission = Permission.find(params[:id])
    authorize @permission, :permissionAccess?
  	@user.permissions << @permission
  	@permission.users << @user

    respond_with(@permission)
  end

  def removeFromUser
  	@user = User.find(params[:user_id])
  	@permission = Permission.find(params[:id])
    authorize @permission, :permissionAccess?
  	@user.permissions.delete(@permission)
  	@permission.users.delete(@user)

    respond_with(@permission)
  end

  def userPermissions
  	if params[:user_id] == 0 then
      @permission = Permission.where(user_id: current_user.id)
    else
      @permission = Permission.where(user_id: params[:user_id])
      authorize @permission, :permissionAccess?
    end

    respond_with(@permission)
  end

  private
  	# Use callbacks to share common setup or constraints between actions.
    def set_permission
      @permission = Permission.find(params[:id])
    end
    
    # Never trust parameters from the scary internet, only allow the white list through.
  	def permission_params
  		params.require(:permission).permit(:name, :description)
  	end
end