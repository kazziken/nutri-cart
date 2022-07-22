class NutritionsController < ApplicationController
    # before_action :authorize, only: [:show, :create]

    def show
        nutrition = Nutrition.find(params[:id])
        render json: nutrition
    end 

    def create
        nutrition = Nutrition.create!(nutrition_params)
        render json: nutrition, status: :created
    end

    private
    
    def nutrition_params
        params.permit(:nf_calories, :nf_total_fat, :nf_saturated_fat, :nf_cholesterol, :nf_sodium, :nf_total_carbohydrate, :nf_dietary_fiber, :nf_sugars, :nf_protein, :nf_potassium, :food_id)
    end


end
