class ApplicationController < ActionController::API

  # skip_before_action :verify_authenticity_token

  # before_action :logged_in?



  # def logged_in?
  #     headers = request.headers["Authorization"]
  #     token = headers.split(" ")[1]

  #     begin 
  #         user_id = JWT.decode(token,"my_Sc")[0]["user_id"]
  #         user = User.find(user_id)
  #     rescue
  #         user = nil
  #     end

  #     render json: {errors: "Please Login!"} unless user 
  # end
   
  
  
  def current_user
        token = request.headers['auth-key']
        begin
          payload = JWT.decode(token,'Phase4',true)
          @user = User.find_by(id: payload[0]['user_id'])
        rescue JWT::VerificationError
          nil
        end
    
  end
end
