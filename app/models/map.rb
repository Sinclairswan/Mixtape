class Map < ActiveRecord::Base
  has_many :markers# Remember to create a migration!
end
