class CartFoodsController < ApplicationController
    def index
        render json: CartFood.all
    end 
    def show
        cart = CartFood.find(params[:id])
        render json: cart
    end

    def create
        cart = CartFood.create!(cart_food_params)
        render json: cart, status: :created
    end


    def destroy
        cart = CartFood.find(params[:id])
        cart.destroy
    end

    private

    def cart_food_params
        params.permit(:cart_id, :food_id)
    end

end
    