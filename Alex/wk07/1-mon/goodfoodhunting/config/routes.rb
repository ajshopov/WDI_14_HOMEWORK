Rails.application.routes.draw do
  resources :comments
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
                #controller file then # then method
  root to: 'pages#home'
  # get '/', to: 'pages#home'

  get '/about', to: 'pages#about'

  # get '/dishes/new', to: 'dishes#new'
  # post '/dishes', to: 'dishes#create'
  # get '/dishes/:id', to: 'dishes#show'
  # get '/dishes', to: 'dishes#index'
  # put 'dishes/:id', to: 'dishes#update'
  # delete 'dishes/:id', to: 'dishes#delete'
  resources :dishes
  resources :comments

  get '/api/dishes', to: 'dishes#api_index'
  post '/api/comments', to: 'comments#api_create'

end
