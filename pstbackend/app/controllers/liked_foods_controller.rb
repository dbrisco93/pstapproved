class LikedFoodsController < ApplicationController
    before_action :find_liked_food, only: [:destroy]
    before_action :authenticate!, only: [:create, :destroy]

    def create
        @liked_food = LikedFood.new(liked_food_params)
        @liked_food.user_id = current_user.id

        if @liked_food.save
            render json: @liked_food, include: [:user, :food]
        else
            render json: { msg: "Cannot like item"}, :status => :bad_request
        end
    end

    def index
        @liked_foods = LikedRestaurant.all
        render json: @liked_restaurants, except: [:created_at, :updated_at]

    end

    def destroy
        if @liked_food.user.id == current_user.id
            @liked_food.destroy
            render :json => { :msg => "Disliked" }, :status => :ok
        else
            render :json => { :msg => "must be logged in" }, :status => :ok
        end
    
    end


    private
    def liked_food_params
        params.require(:liked_food).permit(:user_id, :food_id)
    end

    def find_liked_food
        @liked_food = LikedFood.find_by(id: params[:id])
    end

end
