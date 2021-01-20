class CreateFoodImages < ActiveRecord::Migration[6.0]
  def change
    create_table :food_images do |t|
      t.string :img_url
      t.references :food, foreign_key: true

      t.timestamps
    end
  end
end
