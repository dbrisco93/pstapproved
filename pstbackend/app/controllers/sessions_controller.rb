class SessionsController < ApplicationController

    def create
        @user = User.find_by(username: users_params[:username])

        if @user && @user.authenticate(users_params[:password])

            payload = { user_id: @user.id }
            token = JWT.encode(payload,'PST')
            info = { 
                username: @user.username,
                name: @user.name,
            }
            render json: { auth_key: token, user: info }, :status => :ok
        else
            render json: { :msg => 'User not found'}, :status => :ok
        end
    end 

    private
        def users_params
            params.require(:user).permit(:username,:password)
        end


end
