class FoodSerializer < ActiveModel::Serializer
  attributes :id, :food_name, :photo_url

  # has_many :nutritions
end
