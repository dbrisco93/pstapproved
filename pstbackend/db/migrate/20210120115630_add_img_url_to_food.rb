class AddImgUrlToFood < ActiveRecord::Migration[6.0]
  def change
    add_column :foods, :img_url, :string
  end
end
