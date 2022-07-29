class CreateFoods < ActiveRecord::Migration[7.0]
  def change
    create_table :foods do |t|
      t.string :food_name
      t.string :photo_url
      t.float :nf_calories
      t.float :nf_total_fat
      t.float :nf_saturated_fat
      t.float :nf_cholesterol
      t.float :nf_sodium
      t.float :nf_total_carbohydrate
      t.float :nf_dietary_fiber
      t.float :nf_sugars
      t.float :nf_protein
      t.float :nf_potassium

      t.timestamps
    end
  end
end
