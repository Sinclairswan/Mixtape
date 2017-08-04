enable :sessions

get '/user' do
  session[:user_id]
  erb :login
end


post '/login' do
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
    session[:user_id] = @user.id
    redirect "/user/#{@user.id}"
  else
    @errors = "Wrong Username or Password"
    erb :"/_error", locals: {errors: @errors }
  end
end

get '/user/:id' do
  @user = User.find_by(email: params[:email])
  erb :user_profile
end


put '/user/:id' do
  @user =User.find_by_id(current_user.id)
  @user.update(username: params[:username])
  if @user.save
    redirect "/user/#{current_user.id}"
  else
    erb :user_edit
  end

end
#creating a new user
get'/new' do

erb :register
end

post '/user' do

  @user = User.new(params[:user])
  if @user.save
    session[:user_id] = @user.id
    redirect 'user/#{@user.id}'
  else
    @errors = @user.errors.full_messages
    error 422
    erb :"/_error", locals: {errors: @errors}
  end
end

delete '/user/:id' do
  @user = User.find(params[:id])
  @user.destroy
#delete user
 redirect '/login'
end

 get '/logout' do
  session.delete(:user_id)
  redirect'/user'
end

get '/test' do
  erb :user_profile
end


