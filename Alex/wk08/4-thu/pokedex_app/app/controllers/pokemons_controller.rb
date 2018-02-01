class PokemonsController < ApplicationController

  def new
  end

  def create
    p1 = Pokemon.new
    p1.nickname = params[:nickname]
    p1.level = params[:level]
    p1.species = params[:species]
    p1.save 
    redirect_to '/'
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  def index
    @pokemons = Pokemon.all
  end

  def destroy
    p1 = Pokemon.find(params[:id])
    p1.destroy
    redirect_to '/'
  end
end
