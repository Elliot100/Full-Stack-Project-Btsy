class AddQtyToCartitems < ActiveRecord::Migration[5.2]
  def change
    add_column :cartitems, :qty, :integer, null: false
  end
end
