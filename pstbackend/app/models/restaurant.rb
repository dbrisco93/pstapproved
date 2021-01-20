class Restaurant < ApplicationRecord
    has_many :restaurantfoods
    has_many :foods, :through => :restaurantfoods
end
