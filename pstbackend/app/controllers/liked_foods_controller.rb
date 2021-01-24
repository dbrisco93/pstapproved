class LikedFoodsController < ApplicationController
    before_action :find_liked_restaurant, only: [:destroy]

    def create
        @liked_food = LikedFood.new(liked_food_params)
        @liked_food.user = current_user

        if @liked_food.save
            render json: @liked_food
        else
            render json: { msg: "Cannot like item"}, :status => :bad_request
        end
    end

    def index
        if current_user
            @liked_foods = LikedFood.all
            render :json => @liked_foods.as_json(
                include: [:user]
            ), :status => :ok
        else
            render :json => { :msg => "Not logged in" }
        end

    end

    def destroy
        if @liked_food.user == current_user
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

    def find_liked_restaurant
        @liked_food = LikedFood.find_by(id: params[:id])
    end

end
