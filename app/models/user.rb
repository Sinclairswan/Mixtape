class User < ActiveRecord::Base
  validates :username, :presence => true,
                       :uniqueness => true
  validates :email,    :presence => true,
                       :uniqueness => true,
                       :format => { :with => /\w+@\w+\.\w+/, message: "incorrect format" }
  validates :password, :presence => true


require 'bcrypt'

  def password
      @password ||= BCrypt::Password.new(password_hash)

  end

  def password=(new_password)
    @password = BCrypt::Password.create(new_password)
    self.password_hash = @password
  end

  def authenticate(params)
    self.password == params
  end
    # Remember to create a migration!
end
