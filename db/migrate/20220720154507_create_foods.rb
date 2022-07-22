class CreateFoods < ActiveRecord::Migration[7.0]
  def change
    create_table :foods do |t|
      t.string :food_name
      t.string :photo_url

      t.timestamps
    end
  end
end
