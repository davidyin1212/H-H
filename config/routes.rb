Rails.application.routes.draw do

  devise_for :users
  get 'welcome/index'

  root 'welcome#index'

  resources :users, only: [:index, :create, :update, :show, :destroy] do
    resources :cars, only:[] do
      member do
        get '/index' => 'cars#userCars'
        put '/add' => 'cars#addToUser'
      end
    end
  end

  resources :cars, only: [:index, :create, :update, :show, :destroy] 
  get '/orders' => 'cars#carsOrdered'
  get '/current' => 'cars#carsInProgress'
  get '/shiped' => 'cars#carsShiped'
end
