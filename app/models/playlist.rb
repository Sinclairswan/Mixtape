class Playlist < ActiveRecord::Base
  has_many :songs# Remember to create a migration!
end
