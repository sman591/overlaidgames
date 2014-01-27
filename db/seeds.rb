# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts "Seeding..."

Game.create(
  title: "Fishy",
  slug: "fishy",
  src: "fishy.swf",
  custom_embed: false,
  embed_code: "",
  views: 0,
  width: 550,
  height: 400,
  enabled: true
)

Game.create(
  title: "Bloons Tower Defence 4",
  slug: "bloonstd4",
  src: "bloonstd4.swf",
  custom_embed: false,
  views: 0,
  width: 640,
  height: 640,
  enabled: true
)

Background.create(
  title: "Stone Bridge High School",
  slug: "sbhs",
  src: "http://lcps.org/sbhs",
  uses: 0,
  enabled: true
)

Background.create(
  title: "Bubbles",
  slug: "bubbles1",
  src: "bubbles1.jpg",
  uses: 0,
  enabled: true
)

puts "Complete!"