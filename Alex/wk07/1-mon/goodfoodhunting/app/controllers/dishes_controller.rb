class DishesController < ApplicationController

  def new
    
  end
  
  def create
    dish = Dish.new
    dish.name = params[:name]
    dish.image_url = params[:image_url]
    if dish.save
      redirect_to '/dishes'
    else
      render :new
    end
  end

  def index
    @dishes = Dish.all
  end

  def show
    @dish = Dish.find(params[:id])
  end

  def edit
    @dish = Dish.find(params[:id])
  end

  def destroy
    @dish = Dish.find(params[:id])
    if @dish.destroy
      redirect_to '/dishes'
    else
      render :show
    end
  end
end
