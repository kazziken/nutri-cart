class CartFoodSerializer < ActiveModel::Serializer
  attributes :id, :cart_id, :food_id

  has_one :nutrition, through: :food
end
