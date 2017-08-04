module Authorized
  def authorized!
    unless session[:user]
      session[:original_request] = request.path_info
      redirect '/login'
    end
  end
end

helpers Authorized
