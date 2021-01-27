class SessionsController < ApplicationController

    def create
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            payload = { user_id: @user.id }
            token = JWT.encode(payload,'PST')
            info = { 
                username: @user.username,
                name: @user.name,
                liked_restaurants: @user.restaurants,
                liked_foods: @user.foods
            }
            render json: { auth_key: token,  info: info }, :status => :ok
        else
            render json: { :msg => 'User not found'}, :status => :ok
        end
    end 

    # private
    # def user_params
    #   params.require(:user).permit(:username, :password)
    # end



end
