require 'csv'

Restaurant.destroy_all
Food.destroy_all
LikedRestaurant.destroy_all
User.destroy_all

u1 = User.create(name: 'Dominique', username: 'dombrisco', password:'testing12', email: 'test@gmail.com')


CSV.foreach(Rails.root.join('lib/tasks/seeds/restaurants.csv'), headers: true) do |row|

    Restaurant.create({
        name: row[0],
        address: row[1],
        apple_url: row[2],
        website: row[3],
        ig_url: row[4],
        ig: row[5],
        lat: row[6],
        lng: row[7],
        pst_url: row[8],
    })

end

f1 = Food.create(name: 'Tacos Don Chico', img_url:'1.png')
f2 = Food.create(name: 'Spicy Pork Belly, Hawaiian Steak, & Spicy Pork Bulgogi', img_url:'2.png')
f5 = Food.create(name: 'Sausage Breakfast Tacos', img_url: '3.png')
f6 = Food.create(name: 'Meat Lovers Pizza', img_url: '4.png')
f7 = Food.create(name: 'Meat Lovers Pizza', img_url: '4.png')
f8 = Food.create(name: 'Lone Star Burger', img_url: '5.png')
f9 = Food.create(name: 'Lake Charles Roll', img_url: '6.png')
f10 = Food.create(name: 'Screwburger', img_url: '7.png')
f11 = Food.create(name: 'Blackened Fish & Shrimp', img_url: '8.png')
f12 = Food.create(name: 'Chicken & Waffles', img_url: '9.png')
f13 = Food.create(name: 'Kamp Wings', img_url: '10.png')
f14 = Food.create(name: 'Mosaico Tacos', img_url: '11.png')
f15 = Food.create(name: 'Red Velvet & Strawberry Chicken and Waffles', img_url: '12.png')
f16 = Food.create(name: 'Sampler Tacos (Beef, Chicken, Spicy Brisket)', img_url: '13.png')
f17 = Food.create(name: 'Loaded Seafood Baked Potato', img_url: '14.png')
f18 = Food.create(name: 'Chorizo Egg Cheese Tacos', img_url: '15.png')
f19 = Food.create(name: 'Texas Brisket Egg Cheese Taco', img_url: '16.png')
f20 = Food.create(name: 'Golden Glaze Wings with Cool Ranch', img_url: '17.png')
f21 = Food.create(name: 'Build Your Own Burrito with Ancho Chili Tortilla', img_url: '18.png')
f22 = Food.create(name: '#10 Can Nachos', img_url: '19.png')
f23 = Food.create(name: 'Chicken Bacon Ranch Pizza', img_url: '20.png')
f24 = Food.create(name: 'Spicy Honey Garlic Surf & Turf Hoagie', img_url: '21.png')
f25 = Food.create(name: 'Brunch Burger', img_url: '22.png')





