class Restaurant < ApplicationRecord
    has_many :restaurant_foods
    has_many :foods, :through => :restaurant_foods

    has_many :liked_restaurants
    has_many :users, :through => :liked_restaurants
end
