class Food < ApplicationRecord
    
    has_one :nutrition
    has_many :cart_foods
    has_many :carts, through: :cart_foods
    
    validates :food_name, presence: true
    validates :photo_url, presence: true
end
