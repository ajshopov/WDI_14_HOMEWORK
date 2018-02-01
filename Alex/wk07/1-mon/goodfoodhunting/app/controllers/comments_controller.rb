class CommentsController < ApplicationController
  def create
    comment = Comment.new
    comment.dish_id = params[:dish_id]
    comment.content = params[:content]
    comment.save
    redirect_to "/dishes/#{params[:dish_id]}"
  end

  def api_create
    comment = Comment.new
    comment.dish_id = params[:dish_id]
    comment.content = params[:content]
    comment.save
    render json: {info: 'good job'}
  end

end
