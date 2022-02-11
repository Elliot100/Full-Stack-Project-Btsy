class Product < ApplicationRecord

  has_many :cartitems,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Cartitem
end