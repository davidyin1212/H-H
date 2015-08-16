Rails.application.routes.draw do

  devise_for :users

  # root 'welcome#index'
  scope "api" do
    #map to query parameters
    get 'cars/orders' => 'cars#carsOrdered'
    get 'cars/progress' => 'cars#carsInProgress'
    get 'cars/shipped' => 'cars#carsShipped'
    get 'cars/all' => 'cars#carsAll'

    resources :users, only: [:index, :create, :update, :show, :destroy] do
      #maybe we can map the two gets into query parameters
      get '/cars' => 'cars#userCars'
      get '/permissions' => 'permissions#userPermissions'
      #combine these 2 operations into one update post operation
      post '/permissions' => 'permissions#updateUserPermissions'
      delete '/permissions/:id' => 'permissions#removeFromUser'
    end

    resources :cars, only: [:index, :create, :update, :show, :destroy] do
      post '/addToUser' => 'cars#addToUser'
      delete '/removeFromUser' => 'cars#removeFromUser'
      #map to query parameter
      get '/getUser' => 'users#getUserOfCar'
      #combine these 4 post into one operation
      post '/avaliable' => 'cars#carsUpdateToAvaliable'
      post '/orders' => 'cars#carsUpdateToOrdered'
      post '/progress' => 'cars#carsUpdateToInProgress'
      post '/shipped' => 'cars#carsUpdateToShipped'
    end
    

    resources :permissions, only: [:index, :create, :update, :destroy] do 
    end
  end

  resources :payment, only: [:new, :edit, :create, :show, :update, :destroy] do
  end

  root 'application#index'
  # get '*path' => 'application#index'
 
end
