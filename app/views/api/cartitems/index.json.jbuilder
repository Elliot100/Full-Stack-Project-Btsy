# json.array! @cartitems do |cartitem|
#   json.partial! 'api/cartitems/cartitem', cartitem: cartitem
# end

json.cartitems @cartitems do |cartitem|
  json.(cartitem, :qty)
  json.product cartitem[:product], partial: 'api/cartitems/cartitem', as: :product
end

# # app/views/artists/index.json.jbuilder
# json.artists @artists do |artist|
#   json.(artist, :id, :name, :label)
#   json.albums artist.albums, partial: 'albums/album', as: :album
# end

# # app/views/albums/_album.json.jbuilder
# json.(album, :id, :name)