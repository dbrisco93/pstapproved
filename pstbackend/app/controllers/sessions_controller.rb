class SessionsController < ApplicationController

    def create
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            payload = { user_id: @user.id }
            token = JWT.encode(payload,'PST')
            info = { 
                username: @user.username,
                name: @user.name,
            }
            render json: { auth_key: token }, :status => :ok
        else
            render json: { :msg => 'User not found'}, :status => :ok
        end
    end 

    # private
    # def user_params
    #   params.require(:user).permit(:username, :password)
    # end



end
