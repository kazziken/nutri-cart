class FoodSerializer < ActiveModel::Serializer
  attributes :id, :food_name, :photo_url

  has_one :nutrition
  has_many :cart_foods
end
