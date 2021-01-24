class LikedRestaurantsController < ApplicationController

    before_action :find_liked_restaurant, only: [:destroy]

    def create
        @liked_restaurant = LikedRestaurant.new(liked_restaurant_params)
        @liked_restaurant.user = current_user

        if @liked_restaurant.save
            render json: @liked_restaurant
        else
            render json: { msg: "Cannot like item"}, :status => :bad_request
        end
    end

    def index
        if current_user
            @liked_restaurants = LikedRestaurant.all
            render :json => @liked_restaurants.as_json(
                include: [:user]
            ), :status => :ok
        else
            render :json => { :msg => "Not logged in" }
        end

    end

    def destroy
        if @liked_restaurant.user == current_user
            @liked_restaurant.destroy
            render :json => { :msg => "Disliked" }, :status => :ok
        else
            render :json => { :msg => "must be logged in" }, :status => :ok
        end
    
    end


    private
    def liked_restaurant_params
        params.require(:liked_restaurant).permit(:user_id, :restaurant_id)
    end

    def find_liked_restaurant
        @liked_restaurant = LikedRestaurant.find_by(id: params[:id])
    end


end
