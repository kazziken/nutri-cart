class CartFoodsController < ApplicationController
    def index
        render json: CartFood.all
    end 
    
    def show
        cart_food = CartFood.find(params[:id])
        render json: cart_food
    end

    def create
        cart_food = CartFood.create!(cart_food_params)
        render json: cart_food, status: :created
    end


    def destroy
        cart_food = CartFood.find(params[:id])
        cart_food.destroy
        render json: cart_food
    end

    private

    def cart_food_params
        params.permit(:cart_id, :food_id)
    end

end
    