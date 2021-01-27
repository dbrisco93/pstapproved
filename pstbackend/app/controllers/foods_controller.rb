class FoodsController < ApplicationController
    def index
        @foods = Food.all
        render json: @foods, except: [:created_at, :updated_at], include: [:restaurant_foods, :liked_foods, :restaurants]

    end

    def show
        food = Food.find_by(id: params[:id])
        if food
            render json: food, except: [:created_at, :updated_at]
        else
            render json: { message: 'Food not found'}
        end
    end

    private 

    def food_params
        params.require(:food).permit(:name, :img_url)
    end
end
