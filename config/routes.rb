Rails.application.routes.draw do

  devise_for :users

  root 'welcome#index'

  resources :users, only: [:index, :create, :update, :show, :destroy] do
    get '/cars' => 'cars#userCars'
    get '/permissions' => 'permissions#userPermissions'
    post '/permissions/:id' => 'permissions#addToUser'
    delete '/permissions/:id' => 'permissions#removeFromUser'
  end

  resources :cars, only: [:index, :create, :update, :show, :destroy] do
    post '/addToUser' => 'cars#addToUser'
  end
  get '/orders' => 'cars#carsOrdered'
  get '/current' => 'cars#carsInProgress'
  get '/shiped' => 'cars#carsShiped'
  get '/all' => 'cars#carsAll'

  resources :permissions, only: [:index, :create, :update, :destroy] do 
  end
end
