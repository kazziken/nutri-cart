Rails.application.routes.draw do
  resources :cart_foods
  resources :nutritions #works
  resources :foods #works
  resources :carts, only: [:index, :show, :create, :destroy] #works but do we need an update???

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
  patch '/carts/:id', to: "carts#update"
  post '/create-food-cart', to: "carts#new_cart_food"
  
  #cart_foods
  get "/cart_foods", to: "cart_foods#show"
  patch '/update-cart_foods', to: "cart_foods#update"
  delete "/delete-cart-food", to: "cart_foods#destroy"

  #foods
  post "/new-food", to: "foods#new_food"


end