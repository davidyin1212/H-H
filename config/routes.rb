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
    get '/getUser' => 'users#getUserOfCar'
  end
  get 'cars/orders' => 'cars#carsOrdered'
  get 'cars/progress' => 'cars#carsInProgress'
  get 'cars/shipped' => 'cars#carsShipped'
  get 'cars/all' => 'cars#carsAll'

  resources :permissions, only: [:index, :create, :update, :destroy] do 
  end
end
