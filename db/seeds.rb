# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


User.destroy_all
Cart.destroy_all
CartFood.destroy_all
Food.destroy_all

User.create!(username: "Kenneth Mei", email: "kennethiscool@example.com", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpy6zVMx8VwlWooT_S6GdtdmRUyd7YapK5-_CV3xRtNPqhiK2R5eHlRxQo_y4weG_CGqU&usqp=CAU", password: "123")
User.create!(username: "Mark Wilkins", email: "markiscool@example.com", avatar: "https://www.mypokecard.com/en/Gallery/my/galery/siX8kZGKJ3ip.jpg", password: "123")
User.create!(username: "James", email: "james@gmail.com", avatar: "https://www.mypokecard.com/en/Gallery/my/galery/siX8kZGKJ3ip.jpg", password: "123")
User.create!(username: "William", email: "william@gmail.com", avatar: "https://www.mypokecard.com/en/Gallery/my/galery/siX8kZGKJ3ip.jpg", password: "123")
User.create!(username: "Tashi", email: "tashi@gmail.com", avatar: "https://www.mypokecard.com/en/Gallery/my/galery/siX8kZGKJ3ip.jpg", password: "123")
User.create!(username: "Jon", email: "jon@gmail.com", avatar: "https://www.mypokecard.com/en/Gallery/my/galery/siX8kZGKJ3ip.jpg", password: "123")

Food.create!(
    food_name: 'Pizza', 
    photo_url: 'https://pyxis.nymag.com/v1/imgs/1d8/3d2/4d01063303965c23833c98251bc4a2d69b-best-pizza-slice-joes.2x.h473.w710.jpg',
    nf_calories: 284.62, 
    nf_cholesterol: 18.19,
    nf_dietary_fiber: 639.86,
    nf_potassium: 184.04, 
    nf_protein: 12.19, 
    nf_saturated_fat: 4.78, 
    nf_sodium: 638.76, 
    nf_sugars: 3.83, 
    nf_total_carbohydrate: 35.66, 
    nf_total_fat: 10.37
)
Food.create!(
    food_name: 'Popcorn',
    photo_url: 'https://thebigmansworld.com/wp-content/uploads/2022/03/how-to-air-pop-popcorn.jpeg',
    nf_calories: 44,
    nf_total_fat: 2.69,
    nf_saturated_fat: 0.57,
    nf_cholesterol: 0,
    nf_sodium: 60.36,
    nf_total_carbohydrate: 4.36,
    nf_dietary_fiber: 0.79,
    nf_sugars: 0.04,
    nf_protein: 0.59,
    nf_potassium: 18.96
)

Food.create!(
    food_name: 'Red onion', 
    photo_url: 'https://images.albertsons-media.com/is/image/ABS/184450056?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available',
    nf_calories: 41.36,
    nf_total_fat: 0.18,
    nf_saturated_fat: 0.03,
    nf_cholesterol: 0,
    nf_sodium: 2.82,
    nf_total_carbohydrate: 9.54,
    nf_dietary_fiber: 1.32,
    nf_sugars: 4.45,
    nf_protein: 1.28,
    nf_potassium: 156.04

)
Food.create!(
    food_name: 'Chocolate', 
    photo_url: 'https://images.unsplash.com/photo-1623660053975-cf75a8be0908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwYmFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    nf_calories: 200,
    nf_total_fat: 12,
    nf_saturated_fat: 7,
    nf_cholesterol: 10,
    nf_sodium: 35,
    nf_total_carbohydrate: 25,
    nf_dietary_fiber: 1,
    nf_sugars: 23,
    nf_protein: 3,
    nf_potassium: 0
)
Food.create!(
    food_name: 'Pretzel', 
    photo_url: 'https://handletheheat.com/wp-content/uploads/2021/09/how-to-make-homemade-pretzels-SQUARE.jpg',
    nf_calories: 108.86,
    nf_total_fat: 0.83,
    nf_saturated_fat: 0.11,
    nf_cholesterol: 0,
    nf_sodium: 351.54,
    nf_total_carbohydrate: 22.79,
    nf_dietary_fiber: 0.96,
    nf_sugars: 0.63,
    nf_protein: 2.85,
    nf_potassium: 63.22
)


Cart.create!(user_id: 1)
Cart.create!(user_id: 2)
Cart.create!(user_id: 3)
Cart.create!(user_id: 4)
Cart.create!(user_id: 5)

CartFood.create!(cart_id: 1, food_id: 1)
CartFood.create!(cart_id: 1, food_id: 2)
CartFood.create!(cart_id: 2, food_id: 1)
CartFood.create!(cart_id: 2, food_id: 2)
CartFood.create!(cart_id: 3, food_id: 1)
CartFood.create!(cart_id: 3, food_id: 2)
CartFood.create!(cart_id: 3, food_id: 3)
CartFood.create!(cart_id: 4, food_id: 1)
CartFood.create!(cart_id: 4, food_id: 2)
CartFood.create!(cart_id: 4, food_id: 3)
CartFood.create!(cart_id: 4, food_id: 4)
CartFood.create!(cart_id: 5, food_id: 1)
CartFood.create!(cart_id: 5, food_id: 2)
CartFood.create!(cart_id: 5, food_id: 3)
CartFood.create!(cart_id: 5, food_id: 4)
CartFood.create!(cart_id: 5, food_id: 5)
