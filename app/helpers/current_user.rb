module SessionHelper
  def current_user
    @user ||= User.find_by(id:session[:user_id])
  end
end

helpers SessionHelper
