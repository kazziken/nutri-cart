class Food < ApplicationRecord
    
    has_one :nutrition
    has_many :cart_foods
    has_many :carts, through: :cart_foods
    

end
