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

    def user_cart_foods #THIS WORKS FOR PROFILE
        if @user
            render json: @user.carts
        else
            render json: {message: "User not found"}, status: :not_found
        end
    end

    def user_latest_cart
        if @user
            render json: @user.carts.last
        else
            render json: {message: "Cart not found"}, status: :not_found
        end
    end

    private

    def cart_food_params
        params.permit(:cart_id, :food_id)
    end

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

    def cart_params
        params.permit(:user_id)
    end



end
    