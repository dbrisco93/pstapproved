class UsersController < ApplicationController
    
    
  def index
    @users = User.all
    render json: @users, except: [:created_at, :updated_at]
end
  
  
  
  def create
        @user = User.create(user_params)
          payload = { user_id: @user.id }
          token = JWT.encode(payload,'PST') 
          info = {
            username: @user.username,
            name: @user.name,
            liked_restaurants: @user.restaurants,
            liked_foods: @user.foods
          }   
          render json: { auth_key: token, info: info }, :status => :ok
          byebug

    end


    
    def show
       @user = User.find_by(id: params[:id])
      if @user
        render json: @user
      else 
        render json: { message: 'User not found' }
      end
    end

    # def show_current_user
    #   @current_user = User.find_by(id: params[:id])

    #   render json: @current_user, :include => [ :restaurants]
    # end
    
      private
      def user_params
        params.require(:user).permit(:name, :username, :email, :password)
      end

end
