class UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        @user.save
    
        payload = { user_id: @user.id }
        token = JWT.encode(payload, 'PST')
    
        render json: { auth_key: token }, :status => :ok
    end

    def index
        users = Users.all
        render json: users, except: [:created_at, :updated_at]
    end
    
      def show
        user = User.find_by(id: params[:id])
        if user
          render json: user
        else 
          render json: { message: 'User not found' }
        end
      end
    
      private
      def user_params
        params.require(:user).permit(:name,:username,:email,:password)
      end

end
