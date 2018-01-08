require 'httparty'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/movie' do
  title = params[:title]
  result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=#{title}")
  @name = result['Title']
  @year = result['Year']
  @runtime = result['Runtime']
  @rated = result['Rated']
  @language = result['Language']
  @imdb = result['Ratings'][0]['Value']
  @rottom = result['Ratings'][1]['Value']
  @poster = result['Poster']
  @actors = result['Actors'].split(',')
  @director = result['Director']
  @plot = result['Plot']
  @production = result['Production']
  erb :movie
    
end



