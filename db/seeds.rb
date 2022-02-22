# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all
Cartitem.destroy_all

user1 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user2 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user3 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')

product1 = Product.create(title: "Minimalist Leather Wallet", image: "https://media.istockphoto.com/photos/leather-minimalist-wallet-picture-id916776140?k=20&m=916776140&s=170667a&w=0&h=_GqFjqKp8_LP5_FFeMapbVFzMw7UMxEyiWNhLQYMasE=", price: 32.85, description: "Minimalist Leather Wallet, Pop Up Credit Card Wallet,Unisex Wallet")
product2 = Product.create(title: "Reclaimed Wood & Steel Desk - Wood Office Desk", image: "https://homesourcetx-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/Industrial-and-wooden-desk.jpg", price: 175.25, description: "This table is handcrafted with reclaimed wood.")
product3 = Product.create(title: "Wood Table Lamp", image: "https://www.levimage.com/image/web/product/miscellaneous_products/lt1065_mid-century_table_lamp_csw_1.jpg", price: 112.45, description: "Table lamp provides warm lighting.")
product4 = Product.create(title: "Chunky Yarn", image: "https://us.123rf.com/450wm/belchonock/belchonock2103/belchonock210316349/166525851-knitted-merino-wool-plaid-on-bed-indoors-interior-design.jpg?ver=6", price: 25.32, description: "Soft knitting material - greate DIY gift")
product5 = Product.create(title: "Wool Slippers", image: "https://img.freepik.com/free-photo/warm-winter-women-woolen-slippers-floor-copy-space-text_79075-16379.jpg", price: 38.99, description: "Soft and comfortable handmade slippers")
product6 = Product.create(title: "Straw Hat", image: "https://media.istockphoto.com/photos/hats-straw-hat-picture-id184397074?k=20&m=184397074&s=612x612&w=0&h=2_jAEjS1s5CW_iKOGFVGtrs37_t0CLbdEdLVRYHMmWk=", price: 30.50, description: "Handmade straw hat perfect for the summer time!")
product7 = Product.create(title: "Yellow Hippie Pants", image: "https://thumbs.dreamstime.com/b/woman-legs-yellow-hippie-pants-black-sandals-next-to-acoustic-vintage-guitar-square-stone-background-free-happy-189005971.jpg", price: 82.00, description: "Light breathable material, go everywhere in style")
product8 = Product.create(title: "Bamboo Cutting Board", image: "https://media.istockphoto.com/photos/cutting-board-isolated-picture-id183383013?k=20&m=183383013&s=170667a&w=0&h=IAB2fZZVrpoXuxDwwdtgGFNIPg1AGvr5Eo8QU_z2TF4=", price: 20.00, description: "Easy to wash light weight mold resistent")
product9 = Product.create(title: "Artificial Flowers", image: "https://thumbs.dreamstime.com/z/fake-flowers-interior-artificial-roses-made-fabric-plastic-fake-flowers-interior-artificial-roses-made-fabric-172159651.jpg", price: 52.30, description: "Just as beautiful as real flowers but last forever")
product10 = Product.create(title: "Ceramic Plant Pots", image: "https://s3.envato.com/files/241257534/_DSC0410.jpg", price: 5.50, description: "Pack of 4")


Cartitem.create(user_id: user1.id, product_id: product2.id, qty: 1)
Cartitem.create(user_id: user1.id, product_id: product4.id, qty: 1)
Cartitem.create(user_id: user2.id, product_id: product3.id, qty: 1)
Cartitem.create(user_id: user2.id, product_id: product5.id, qty: 1)
Cartitem.create(user_id: user3.id, product_id: product3.id, qty: 1)

