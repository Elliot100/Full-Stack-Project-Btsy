# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all

user1 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user2 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user3 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')

product1 = Product.create(title: "Minimalist Leather Wallet", image: "https://cdn.shopify.com/s/files/1/0883/8928/products/2-Vegetble-tanned-leather-minimalist-wallet-origami-foldable-light-brown.jpg?v=1609759752", price: 32.00, description: "Minimalist Leather Wallet, Pop Up Credit Card Wallet,Unisex Wallet")
