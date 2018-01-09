require 'httparty'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/results' do
  search = params[:search]
  result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&s=#{search}")
  
  @search_results = []
  result['Search'].each do |film|
    @search_results.push(film['Title'])
  end

  if result['totalResults'] == "1"
    redirect to("/movie?title=#{@search_results[0]}")
  end

  file = File.open('search_history.txt', 'a')
  file.puts(params[:search])
  file.close

  erb :search
end

get '/movie' do
  title = params[:title]
  result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=#{title}")
  @name = result['Title']
  @year = result['Year']
  @runtime = result['Runtime']
  @rated = result['Rated']
  @language = result['Language']

  if result['Ratings'][0] != nil
    @imdb = result['Ratings'][0]['Value']
  else
    @imdb = '-'
  end
  
  if result['Ratings'][1] != nil
    @rottom = result['Ratings'][1]['Value']
  else
    @rottom = '-'
  end

  @poster = result['Poster']
  @actors = result['Actors'].split(',')
  @director = result['Director']
  @plot = result['Plot']
  @production = result['Production']
  erb :movie
end

get '/history' do
  file = File.readlines('search_history.txt').uniq
  @search_history_list = file
  erb :history
end

