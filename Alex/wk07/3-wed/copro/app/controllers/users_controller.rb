class UsersController < ApplicationController
  
  def new
  end

  def create
    user = User.new
    user.email = params[:email]
    user.password = params[:password]
    user.save
    session[:user_id] = user.id
    redirect_to '/'
  end
end
