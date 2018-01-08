require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

get '/' do
  stock = params[:stock]
  result = StockQuote::Stock.quote("#{stock}")
  @symbol = result.symbol
  @price = result.l
  @eps = result.eps
  @url = result.summary[0]['url']
  @overview = result.summary[0]['overview']
  @exchange = result.e
  erb :index  
end

get '/about' do
  erb :about  
end
