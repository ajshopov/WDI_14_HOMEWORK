class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
end
# helpers only available inside views
# place current_user logged_in? etc here to access everywhere