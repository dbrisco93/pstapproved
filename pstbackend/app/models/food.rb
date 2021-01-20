class Food < ApplicationRecord
    has_many :restaurantfoods
    has_many :restaurants, :through => :restaurantfoods

end
