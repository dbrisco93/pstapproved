class CreateRestaurantFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurant_foods do |t|
      t.references :food, null: false, foreign_key: true
      t.references :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
