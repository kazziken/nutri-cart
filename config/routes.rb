Rails.application.routes.draw do
  resources :cart_foods
  resources :foods #works
  resources :users #works
  # resources :carts

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  #users
  get "/me", to: "users#show" #DISPLAYS USER LOGIN
  post "/signup", to: "users#create" #CREATES A NEW USER
  patch '/user/:id', to: "users#update" 
  delete "/user/:id", to: "users#destroy"
  #sessions
  post "/login", to: "sessions#create" #LOGIN 
  delete "/logout", to: "sessions#destroy" #LOGOUT

  #carts above
  get '/current-cart', to: "carts#show" #displays current cart
  post "/create-cart", to: "carts#create" #CREATES NEW INSTANCE OF A CART
  post '/create-cart-food', to: "carts#new_cart_food" #CREATES NEW CART FOOD PRODUCT THAT ALSO ADDS TO CURRENT CART
  patch '/carts/:id', to: "carts#update"
  delete "/carts/:id", to: "carts#destroy"
  
  #cart_foods
  get "/all-carts", to: "cart_foods#user_cart_foods" # WORKS FOR PROFILE, displays all user_carts + foods
  get "/latest-cart", to: "cart_foods#user_latest_cart" # WORKS FOR CART, DISPLAYS THE CART THE USER IS CURRENTLY ON
  patch '/update-cart-foods', to: "cart_foods#update"
  # delete "/delete-cart-food/:id", to: "cart_foods#destroy"

  #foods
  post "/new-food", to: "foods#new_food" #creates a new food
  delete "/delete-cart-food/:id", to: "foods#destroy" #WORKS FOR DELETING CURRENT CART ITEMS


end