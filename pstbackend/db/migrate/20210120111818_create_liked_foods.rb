class CreateLikedFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :liked_foods do |t|
      t.references :food, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
