Rails.application.routes.draw do
  get '/', to: 'pages#home'
  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'
  
  resources :likes
  resources :projects, only: [:new, :create, :show]
  resources :users
  resources :comments
end
