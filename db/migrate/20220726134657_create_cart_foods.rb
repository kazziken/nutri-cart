class CreateCartFoods < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_foods do |t|
      t.integer :cart_id
      t.integer :food_id

      t.timestamps
    end
  end
end
