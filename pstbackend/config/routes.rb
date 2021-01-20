Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :restaurants, only: [:index, :show]
  resources :foods, only: [:index, :show]
  post '/login', to 'sessions#create'

end
