class CreateUsers < ActiveRecord::Migration
  def change
  	create_table :users do |t|
  		t.string   :username,     null: false
  		t.string   :email,        null: false
  		t.string   :password_hash, null: false
      t.integer  :phone, limit: 8

        t.timestamps

  	end
  end
end
