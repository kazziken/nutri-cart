class CreateNutritions < ActiveRecord::Migration[7.0]
  def change
    create_table :nutritions do |t|
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
      t.integer :food_id

      t.timestamps
    end
  end
end
