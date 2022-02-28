class RemoveTotalcartitemsFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :totalcartitems, :integer
  end
end
