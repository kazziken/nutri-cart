class NutritionSerializer < ActiveModel::Serializer
  attributes :id, :nf_calories, :nf_total_fat, :nf_saturated_fat, :nf_cholesterol, :nf_sodium, :nf_total_carbohydrate, :nf_dietary_fiber, :nf_sugars, :nf_protein, :nf_potassium, :food_id
end
