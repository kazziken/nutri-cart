class CartsController < ApplicationController

    def show
        cart = Cart.find(params[:id])
        render json: cart
    end

    def create
        cart = Cart.create!(cart_params)
        render json: cart, status: :created
    end


    def destroy
        cart = Cart.find(params[:id])
        cart.destroy
    end

    private

    def cart_params
        params.permit(:user_id)
    end

end
