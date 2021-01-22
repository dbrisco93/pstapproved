class LikedRestaurantsController < ApplicationController

    def create
        @liked_restaurant = LikedRestaurant.create!(liked_restaurant_params)
        @liked_restaurant.save
        render json: @liked_restaurant      
    end

    def index
        @liked_restaurants = LikedRestaurant.all
        render json: @liked_restaurants, except: [:created_at, :updated_at]
    end

    def destroy
    
    end

    def show
        @liked_restaurant = LikedRestaurant.find_by(id: params[:id])   
    end

    private
    def liked_restaurant_params
        params.require(:liked_restaurant).permit(:user_id, :restaurant_id)
    end


end
