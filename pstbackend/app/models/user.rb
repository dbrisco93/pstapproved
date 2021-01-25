class User < ApplicationRecord
    has_secure_password

    has_many :liked_foods
    has_many :foods, :through => :liked_foods
    has_many :liked_restaurants
    has_many :restaurants, :through => :liked_restaurants
    
    validates :name, presence: true
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true
    validates :email, presence: true
end
