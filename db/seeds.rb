5.times do
    Work.create(
        name: Faker::App.name,
        image_url: Faker::Avatar.image
    )
end

puts 'Seeded Succesfully'