class Song < ActiveRecord::Base
  belongs_to :playlist# Remember to create a migration!
end
