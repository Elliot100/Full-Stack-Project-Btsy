class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title
      t.string :image
      t.decimal :price, :precision => 8, :scale => 2
      t.text :description
      t.timestamps
    end
  end
end
