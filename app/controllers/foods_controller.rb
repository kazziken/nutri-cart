class FoodsController < ApplicationController
    
    def index
        render json: Food.all
    end

    def show
        food = find_food
        render json: food
    end

    def create #CREATING FOODS THAT DO NOT EXIST IN THE CURRENT DB
        food = Food.find_by(food_name: params[:food_name])
        if food
            render json: food
        else
            food = Food.create!(food_params)
            render json: food, status: :created
        end
    end
    
    # def new_food #FOOD CREATION FORM ON PROFILE
    #     new_food = Food.create!(food_params)
    #     new_nutri = Nutrition.create!(
    #         nf_calories: params[:nf_calories], 
    #         nf_total_fat: params[:nf_total_fat],
    #         nf_saturated_fat: params[:nf_saturated_fat], 
    #         nf_cholesterol: params[:nf_cholesterol], 
    #         nf_sodium: params[:nf_sodium], 
    #         nf_total_carbohydrate: params[:nf_total_carbohydrate], 
    #         nf_dietary_fiber: params[:nf_dietary_fiber], 
    #         nf_sugars: params[:nf_sugars], 
    #         nf_protein: params[:nf_protein], 
    #         nf_potassium: params[:nf_potassium],
    #         food_id: new_food.id
    #     )
    #     render json: new_food, status: :created
    # end

    def destroy #DELETING THE INSTANCE OF A FOOD IN A CART
        food = find_food
        food.destroy
        render json: food
    end
    
    private
    
    def food_params
        params.permit(:food_name, 
            :photo_url, 
            :nf_calories, 
            :nf_total_fat, 
            :nf_saturated_fat, 
            :nf_cholesterol, 
            :nf_sodium, 
            :nf_total_carbohydrate, 
            :nf_dietary_fiber, 
            :nf_sugars, 
            :nf_protein, 
            :nf_potassium)
    end

    def find_food
        Food.find(params[:id])
    end

end
