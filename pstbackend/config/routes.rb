Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :restaurants, only: [:index, :show]
  resources :foods, only: [:index, :show]
  resources :users
  resources :liked_restaurants
  resources :liked_foods
  post '/login', to: 'sessions#create'
  get '/profile', to: 'users#show_current_user'
end
