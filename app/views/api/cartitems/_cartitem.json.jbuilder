# json.extract! cartitem, :id, :title, :price, :image, :description


# json.extract! cartitem do
#   json.product.id cartitem.id
#   json.product.title cartitem.title
#   json.product.price cartitem.price
#   json.product.image cartitem.image
#   json.product.description cartitem.description
#   json.qty cartitem.qty
# end


json.(product, :id, :title, :price, :image, :description)

# # app/views/artists/index.json.jbuilder
# json.artists @artists do |artist|
#   json.(artist, :id, :name, :label)
#   json.albums artist.albums, partial: 'albums/album', as: :album
# end

# # app/views/albums/_album.json.jbuilder
# json.(album, :id, :name)