class AddTotalcartitemsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :totalcartitems, :integer
  end
end
