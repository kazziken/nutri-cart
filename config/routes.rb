Rails.application.routes.draw do
  resources :cart_foods
  resources :nutritions #works
  resources :foods #works
  resources :cart_foods #works
  resources :carts, only: [:show, :create, :destroy] #works but do we need an update???

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
  post '/carts', to: "carts#create"
  #cart_foods
  post "/add-to-cart", to: "cart_foods#create"
  delete "/delete-cart-food", to: "cart_foods#destroy"

  #foods
  post "/new-food", to: "foods#new_food"


end