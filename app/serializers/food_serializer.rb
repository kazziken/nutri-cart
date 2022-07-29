class FoodSerializer < ActiveModel::Serializer
  attributes :id, :food_name, :photo_url, :nf_calories, :nf_total_fat, :nf_saturated_fat, :nf_cholesterol, :nf_sodium, :nf_total_carbohydrate, :nf_dietary_fiber, :nf_sugars, :nf_protein, :nf_potassium

  has_many :cart_foods
  has_many :carts, through: :cart_foods
end
