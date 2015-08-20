class UserGroupController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user_group, only: [:update, :destroy, :show]

  def index
    @user_group = UserGroup.all;
    respond_with @user_group
  end

  def show
    respond_with @user_group
  end

  def create
  end

  def update
  end

  def destory
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_group
      @user_group = UserGroup.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_group_params
      params.require(:user_group).permit(:name, :description)
    end
end
