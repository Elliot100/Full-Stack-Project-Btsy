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
product3 = Product.create(title: "Wood Table Lamp", image: "https://media.istockphoto.com/photos/yellow-artistic-lamp-with-rock-and-wooden-basement-on-the-table-picture-id1127365483?k=20&m=1127365483&s=170667a&w=0&h=mMKNACPJma1MCZPKJJsIZFzUMkVjxSxihn65Al-Zjq0=", price: 112.45, description: "Table lamp provides warm lighting.")
product4 = Product.create(title: "Chunky Yarn", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6eg1NED1_i7sG-GRzpTxaht2SOIGRG7XSA&usqp=CAU", price: 25.32, description: "Soft knitting material - greate DIY gift")
product5 = Product.create(title: "Wool Slippers", image: "https://www.kids-world.com/images/LO886.jpg", price: 38.99, description: "Soft and comfortable handmade slippers")

Cartitem.create(user_id: user3.id, product_id: product1.id)
Cartitem.create(user_id: user1.id, product_id: product2.id)
Cartitem.create(user_id: user2.id, product_id: product3.id)
Cartitem.create(user_id: user3.id, product_id: product3.id)
Cartitem.create(user_id: user1.id, product_id: product4.id)
Cartitem.create(user_id: user2.id, product_id: product5.id)
