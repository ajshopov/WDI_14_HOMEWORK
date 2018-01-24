Rails.application.routes.draw do
  resources :comments
  get '/', to: 'pages#home'
  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'
  
  resources :projects, only: [:new, :create, :show]
  resources :users
  resources :comments
end
