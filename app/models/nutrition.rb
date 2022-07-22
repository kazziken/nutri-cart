class Nutrition < ApplicationRecord

    belongs_to :food
    validates :nf_calories, presence: true
    validates :nf_total_fat, presence: true
    validates :nf_saturated_fat, presence: true
    validates :nf_cholesterol, presence: true
    validates :nf_sodium, presence: true
    validates :nf_total_carbohydrate, presence: true
    validates :nf_dietary_fiber, presence: true
    validates :nf_sugars, presence: true
    validates :nf_protein, presence: true
    validates :nf_potassium, presence: true

end
