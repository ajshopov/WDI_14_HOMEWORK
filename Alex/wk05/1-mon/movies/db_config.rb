require 'pg'
require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'omdb_movies'
}

ActiveRecord::Base.establish_connection(options)
