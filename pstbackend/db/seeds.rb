require 'csv'

# do delete all when reseed

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


