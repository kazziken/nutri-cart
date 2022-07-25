Rails.application.routes.draw do
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
  #sessions
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #carts above
  #cart_foods
  delete "/delete-cart-food", to: "cart_foods#destroy"

  #foods
  post "/new-food", to: "foods#new_food"


end