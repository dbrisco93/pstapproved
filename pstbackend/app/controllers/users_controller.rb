class UsersController < ApplicationController
    
    
  def index
    @users = User.all
    render json: @users, except: [:created_at, :updated_at]
end
  
  
  
  def create
        @user = User.create!(user_params)
        if @user.valid?    
          payload = { user_id: @user.id }
          token = JWT.encode(payload,'PST')    
          render json: { auth_key: token }, :status => :ok
        else
          render json: { :msg => "Not a valid user"}
        end

    end


    
    def show
       @user = User.find_by(id: params[:id])
      if @user
        render json: @user
      else 
        render json: { message: 'User not found' }
      end
    end
    
      private
      def user_params
        params.require(:user).permit(:name,:username,:email,:password)
      end

end
