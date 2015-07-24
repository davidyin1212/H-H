class WelcomeController < ApplicationController
  def index
  	if user_signed_in?
      redirect_to user_path(current_user)
    else
      redirect_to welcome_index_path
    end
  end
end
