class ApplicationController < ActionController::API

    def current_user
        token = request.headers['auth-key']
        begin
          payload = JWT.decode(token,'Phase4',true)
          user = User.find_by(id: payload[0]['user_id'])
        rescue JWT::VerificationError
          nil
        end
    
    end
end
