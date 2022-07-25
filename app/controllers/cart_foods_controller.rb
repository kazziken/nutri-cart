class CartFoodsController < ApplicationController

    def show
        cart_food = find_cart_food
        render json: cart_food
    end

    def create
        cart_food = CartFood.create!(cart_foods_params)
        render json: cart_food
    end

    def destroy
        cart_food = find_cart_food
        cart_food.destroy
    end


    private
    def find_cart_food
        CartFood.find(params[:id])
    end

    def cart_foods_params
        params.permit(:cart_id, :food_id)
    end

end
