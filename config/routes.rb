Rails.application.routes.draw do

  devise_for :users
  get 'welcome/index'

  root 'welcome#index'

  resources :users, only: [:index, :create, :update, :show, :destroy] do
    get '/cars' => 'cars#userCars'
  end

  resources :cars, only: [:index, :create, :update, :show, :destroy] do
    put '/add' => 'cars#addToUser'
  end
  get '/orders' => 'cars#carsOrdered'
  get '/current' => 'cars#carsInProgress'
  get '/shiped' => 'cars#carsShiped'
end
