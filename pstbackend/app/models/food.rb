class Food < ApplicationRecord
    has_many :restaurant_foods
    has_many :restaurants, :through => :restaurant_foods


    has_many :liked_foods
    has_many :users, :through => :liked_foods
end
