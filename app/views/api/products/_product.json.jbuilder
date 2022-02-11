json.extract! product, :id, :title, :image, :price, :description
json.added_by_current_user !!product.cartitems.find_by(user_id: current_user.id)