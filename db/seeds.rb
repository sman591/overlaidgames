# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts "Seeding..."

Game.create(
  title: "A Sample Game",
  slug: "sample",
  file: "sample.swf",
  custom_embed: false,
  embed_code: "",
  views: 0,
  enabled: true
)

Background.create(
  title: "A Sample Background",
  slug: "sample",
  file: "sample.jpg",
  uses: 0,
  enabled: true
)

puts "Complete!"