class CartsController < ApplicationController

    def index
        carts = Cart.all
        render json: carts
    end

    def show
        cart = Cart.find(params[:id])
        render json: cart
    end

    def create
        cart = Cart.create!(cart_params)
        render json: cart, status: :created
    end

    def new_cart_food
        cart = Cart.find(params[:id])
        food = Food.find_by(food_name: params[:food_name])
        if !food
            food = Food.create!(food_params)
        end        
        new_cart_food = CartFood.create!(
            cart_id: cart.id,
            food_id: food.id
        )
        render json: cart, status: :created
    end

    def destroy
        cart = Cart.find(params[:id])
        cart.destroy
    end

    # def user_carts_destroy
    #     user = User.find(session[:user_id])
    #     if user
    #         cart = user.cart
    #         cart.destroy
    #     else
    #         render json: {message: "Tattoo not found"}, status: :not_found
    #     end
    # end

    private

    def cart_params
        params.permit(:user_id)
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
end
