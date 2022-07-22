class CartFood < ApplicationRecord
    belongs_to :cart, dependent: :destroy
    belongs_to :food, dependent: :destroy
end
