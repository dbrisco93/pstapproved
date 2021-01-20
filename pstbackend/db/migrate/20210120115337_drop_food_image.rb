class DropFoodImage < ActiveRecord::Migration[6.0]
  def change
    drop_table :food_images
  end
end
