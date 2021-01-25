class LikedFood < ApplicationRecord
  belongs_to :food
  belongs_to :user

  validates :user_id, uniqueness: { scope: :food_id}

end
