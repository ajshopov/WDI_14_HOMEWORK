class CommentsController < ApplicationController
  
  def create
    redirect_to '/login' unless session[:user_id]

    c1 = Comment.new
    c1.user_id = session[:user_id]
    c1.project_id = params[:project_id]
    c1.description = params[:description]
    c1.save
    redirect_to "/projects/#{params[:project_id]}"
  end

end
