Rails.application.routes.draw do
  resources :cart_foods
  resources :nutritions #works
  resources :foods #works
  resources :users
  resources :carts

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  #users
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  patch '/user/:id', to: "users#update"
  delete "/user/:id", to: "users#destroy"
  #sessions
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #carts above
  post "/create-cart", to: "carts#create"
  post '/create-food-cart', to: "carts#new_cart_food"
  patch '/carts/:id', to: "carts#update"
  delete "/carts/:id", to: "carts#user_carts_destroy"
  
  #cart_foods
  get "/all-carts", to: "cart_foods#user_cart_foods" # WORKS FOR PROFILE, displays all user_carts + foods
  get "/latest-cart", to: "cart_foods#user_latest_cart"
  patch '/update-cart-foods', to: "cart_foods#update"
  delete "/delete-cart-food/:id", to: "cart_foods#destroy"

  #foods
  post "/new-food", to: "foods#new_food"
  # delete "/delete-cart-food/:id", to: "foods#destroy"


end