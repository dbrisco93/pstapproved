class RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.all
        render json: @restaurants, except: [:created_at, :updated_at], include: [:restaurant_foods, :liked_restaurants, :foods]
    end

    def show
        restaurant = Restaurant.find_by(id: params[:id])
        if restaurant
            render json: restaurant, except: [:created_at, :updated_at]
        else
            render json: { message: 'Restaurant not found'}
        end
    end

    private 

    def restaurant_params
        params.require(:restaurant).permit(:name, :address, :apple_url, :website, :ig_url, :ig, :lat, :lng, :pst_url)
    end
end
