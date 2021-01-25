class LikedRestaurantsController < ApplicationController

    before_action :find_liked_restaurant, only: [:destroy]
    before_action :authenticate!, only: [:create, :destroy]

    def create
        @liked_restaurant = LikedRestaurant.new(liked_restaurant_params)
        @liked_restaurant.user_id = current_user.id
        if @liked_restaurant.save
            render json: @liked_restaurant, include: [:user, :restaurant]
        else
            render json: { msg: "Cannot like item"}, :status => :bad_request
        end
    end

    def index
        @liked_restaurants = LikedRestaurant.all
        render json: @liked_restaurants, except: [:created_at, :updated_at]
    end

    def destroy
        if @liked_restaurant.user_id == current_user.id
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
