Rails.application.routes.draw do
  get 'car/index'

  post 'car/create'

  get 'car/update'

  get 'car/delete'

  get 'car/show'

  get 'user/index'

  get 'user/create'

  get 'user/update'

  get 'user/delete'

  get 'user/show'

  get 'car_controller/create'

  get 'car_controller/update'

  get 'car_controller/delete'

  get 'car_controller/index'

  get 'car_controller/show'

  get 'user_controller/create'

  get 'user_controller/update'

  get 'user_controller/delete'

  get 'user_controller/index'

  get 'user_controller/show'

  devise_for :users
  get 'welcome/index'

  root 'welcome#index'

end
