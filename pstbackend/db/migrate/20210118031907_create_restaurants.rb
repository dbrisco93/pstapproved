class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.string :apple_url
      t.string :website
      t.string :ig_url
      t.string :ig
      t.float :lat
      t.float :lng
      t.string :pst_url

      t.timestamps
    end
  end
end
