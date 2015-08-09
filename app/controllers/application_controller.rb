require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  # respond_to :html

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include Pundit
  protect_from_forgery with: :null_session

  respond_to :html, :json

  def index
  	if !user_signed_in?
  	  redirect_to(new_user_session_path)
  	end
  end
end
