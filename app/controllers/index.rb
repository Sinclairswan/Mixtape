get '/' do

  erb :login
end

get '/auth/:provider/callback' do
 binding.pry
  @user = User.find_by(email: auth_hash['info']['email'])
  @user.access_token = auth_hash['credentials']['token']
  @user.save
  @spotify = SpotClient.new(@user.access_token).client
  self.current_user = @user
  redirect_to "/user/#{@user.id}"
end

def auth_hash
  request.env['omniauth.auth']
end
