const db = require('../db')
const { Place } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const places = [
    {
      name: 'Grand Canyon National Park, Arizona',
      description:
        "Grand Canyon National Park encompasses canyons, river tributaries, and surrounding grounds. The Grand Canyon is situated in Arizona's northwestern quadrant. With millions of visitors making the trip to the canyon each year, this park is one of the most visited tourist destinations in the world.",
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftravelfeatured.com%2Fwp-content%2Fuploads%2F2013%2F11%2FGrand-Canyon-National-Park-9.jpg&f=1&nofb=1'
    },

    {
      name: 'Quepos, Costa Rica',
      description:
        "Grand Canyon National Park encompasses canyons, river tributaries, and surrounding grounds. The Grand Canyon is situated in Arizona's northwestern quadrant. With millions of visitors making the trip to the canyon each year, this park is one of the most visited tourist destinations in the world.",
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flacgeo.com%2Fsites%2Fdefault%2Ffiles%2Fmanuel_antonio_national_park_3_opt%2520(1).jpg&f=1&nofb=1'
    },

    {
      name: 'Zermatt, Switzlerland',
      description:
        'When most people think of Zermatt, they think of one thing: The Matterhorn. This ultimate Swiss icon looms over Zermatt, first drawing visitors here in the 1860s. The village of Zermatt itself is lovely and car-free, with old-fashioned brown chalets and winding alleys. (Don’t worry, you don’t have to walk everywhere—there are electric vehicles and horse-drawn cabs.) Skiing in the region often lasts through early summer, but when the weather’s warmer, it’s a great time to hike.',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.myswitzerland.com%2F-%2Fmedia%2Fst%2Fgadmin%2Fimages%2Fvillage%2Fwinter%2Fdorf_zermatt_winter_28413.jpg&f=1&nofb=1'
    },

    {
      name: 'Tokyo, Japan',
      description:
        'With its futuristic skyscrapers, unrivaled food scene, and wild nightlife, Tokyo is a rush of pure adrenaline. This vast and multifaceted city is famously cutting edge, yet its ancient Buddhist temples, vintage teahouses, and peaceful gardens offer a serene escape — and a poignant reminder of the city’s long history. And for those who know where to look, Tokyo’s smaller pleasures (secret ramen spots, shopping alleys, chill record bars) are often hiding in plain sight.',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.alojapan.com%2Fwp-content%2Fuploads%2F2019%2F07%2F66619684_471798706951195_6026675193869416915_n.jpg&f=1&nofb=1'
    },

    {
      name: 'Rome, Itlay',
      description:
        'The sprawling city of Rome remains one of the most significant stops in the world, thanks to its seamless blend of Old World wonders and modern delights. The ruins of the Colosseum, her iconic fountains, lazy wanders through cobblestone streets with gelato in hand: All this and more beckon. Rome is a winding, spectacular city full of places to discover.',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.travelroma.com%2Ffiles%2Fhotel%2Fcity-a%2Fhotel-rome-city-centre-01.jpg&f=1&nofb=1'
    }
  ]
  await Place.insertMany(places)

  console.log('Created Destinations')
}

const run = async () => {
  await db.dropDatabase()
  await main()
  db.close()
}

run()
