require 'httparty'
require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require_relative 'db_config'
require_relative 'models/movie'

get '/' do
  erb :index
end

get '/results' do
  search = params[:search]
  result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&s=#{search}")
  
  @results_array = result['Search']

  if result['Response'] == "False"
    redirect to('/blank')
  end

  if result['totalResults'] == "1"
    redirect to("/movie?title=#{@results_array[0]['Title']}")
  end

  file = File.open('search_history.txt', 'a')
  file.puts(params[:search])
  file.close

  erb :search
end

get '/blank' do
  erb :blank
end

get '/movie' do
  title = params[:title]
  # @movies = Movie.all
  #object lookup
  lookup_data = Movie.find_by(name: title)
  if lookup_data != nil
  #if title matches database title
  #return sql data
    @name = lookup_data[:name]
    @year = lookup_data[:year]
    @rated = lookup_data[:rated]
    @runtime = lookup_data[:runtime]
    @poster = lookup_data[:poster]
  else
  #else httparty
    result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=#{title}")
    @name = result['Title']
    @year = result['Year']
    @rated = result['Rated']
    @runtime = result['Runtime']
    @poster = result['Poster']
  # save to db
  # binding.pry
  
    movie = Movie.create(name: @name, year: @year, rated: @rated, runtime: @runtime, poster: @poster)
  end





  # @language = result['Language']

  # if result['Ratings'][0] != nil
  #   @imdb = result['Ratings'][0]['Value']
  # else
  #   @imdb = '-'
  # end
  
  # if result['Ratings'][1] != nil
  #   @rottom = result['Ratings'][1]['Value']
  # else
  #   @rottom = '-'
  # end

  # @actors = result['Actors'].split(',')
  # @director = result['Director']
  # @plot = result['Plot']
  # @production = result['Production']
  erb :movie
end

get '/history' do
  file = File.readlines('search_history.txt').uniq[-10..-1]
  @search_history_list = file
  erb :history
end

