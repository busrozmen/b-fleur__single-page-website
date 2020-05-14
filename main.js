//for date
document.getElementById("date").innerHTML=new Date().toDateString();

var typesData = [{
        name: "Alstroemerias",
        description: "Alstroemerias are more often called either Peruvian Lilies or Lilies of the Incas and are native to South America. Peruvian Lilies come in a variety of warm colors like pink and orange and are symbolic of friendship, wealth and devotion. These flowers bloom in late spring/early summer when exposed to direct sunlight and watered weekly (water more often when you notice soil looking dry, water less when the soil looks soggy).",
        photo: "./assets/alstroemerias.jpg",
    },
    {
        name: "Calla Lilies",
        description: "The Calla Lily is associated with faith and purity. For this reason, religious figures like the Virgin Mary are often depicted holding a bouquet of calla lilies. Calla lilies are also often associated with sympathy and rebirth, making them a popular flower at sympathy occasions. These beauties grow in full to partial sunlight and should be planted in spring to bloom in late summer. with continued care, they can grow up to two feet long! Once cut, calla lilies can last 2 weeks in a vase.",
        photo: "./assets/calla-lilies.jpg",
    },
    {
        name: "Carnations",
        description: "Carnations come in 3 different types: large flowered carnations, spray carnations, and dwarf flowered carnations. Large flowered carnations can grow to over 20 inches high with one large bloom per stem. These are also referred to as the florist’s carnation. Spray and dwarf carnations have smaller blooms but have multiple blooms per stem. These carnations grow to 12 inches and are more commonly found in gardens. When planting carnations take care to plant in a well-draining soil and in an area with ample sunlight. Carnations can have different meanings depending on their color – a pink carnation symbolizes motherly love, a white carnation means good luck, a yellow carnation means disappointment, etc. Their versatility has made them an extremely popular flower for all occasions.",
        photo: "./assets/carnations.jpg",
    },
    {
        name: "Daisies",
        description: "Daisies are found on every continent other than Antarctica and belong to one of the largest known plant families. Daisies symbolized innocence, a connotation that comes from the Victorian era. Based on what color the daisy is, the flower can take on another meaning. Daisy flowers prefer full sun and average soil conditions. Depending on the variation, they can grow to anywhere between 8 inches to 4 feet. Care tip: only water during the summer only if rainfall is less than 1 inch per week.",
        photo: "./assets/daisies.jpg",
    },
    {
        name: "Gardenias",
        description: "Gardenia’s are most famous for their scented and waxy white flowers that can bring a garden to life. Depending on your geographical location (and personal preference) you get to decide whether your gardenia will live indoors or outdoors. To ensure that your gardenias bloom throughout their growing season, keep the soil well drained and at a pH of 4.5 to 5.5 regardless of whether they are planted in a pot or outside in the garden. These plants also need ample amounts of water, so make sure to never let your gardenia dry out – water regularly.",
        photo: "./assets/gardenias.jpg",
    },
    {
        name: "Lilies",
        description: "Lilies are one of the most popular and versatile flowers in the world. Coming in a variety of colors and known for their strong fragrance, this elegant bloom is a show-stopper on its own while also serving as the perfect complement to any bouquet. In fact, lilies are one of the most popular flowers in the world, and it’s not hard to see why. There are over 100 different types of true lilies belonging to the “lilium” genus. Lilies are found dominantly in the Northern Hemisphere of the world.",
        photo: "./assets/lilies.jpg",
    },
    {
        name: "Orchids",
        description: "Did you know that orchids are one of the oldest flower plants known to man? Scientists have speculated that orchids have been around as far back as 100 million years. With over 30,000 types of orchids some of the most popular types include Phalaenopsis Orchid, Dendrobium Orchid, Cattleya Orchid and Vanilla Orchid. Orchids generally represent love, fertility, thoughtfulness and charm. However, each variety of these flower types has it’s own color has its own meaning. Phalaenopsis orchids symbolize health and prosperity, while Dendrobium orchids represent wisdom & beauty. Cymbidium orchids symbolize strength & nobility, and Oncydium orchids symbolize love & talent.",
        photo: "./assets/orchids.jpg",
    },
    {
        name: "Sunflowers",
        description: "Sunflowers are one of the most popular flower types and are best known for their dazzling yellow color and large size. Sunflowers generally symbolize adoration, loyalty and longevity in flower language. Native Americans view sunflowers as a symbol of harvest and bounty since the flower provides seeds and pigments on top of being visually beautiful. Sunflowers need direct sunlight for 6 to 8 hours per day and require hot conditions to flower well. Sunflowers also have long roots that require plenty of room to spread out, so soil should be well dug and not too dense for growth. Avoid over fertilization or risk your stems breaking in the fall.",
        photo: "./assets/sunflowers.jpg",
    }
]

var careData = [{
        title: "Rose",
        time:"Blooms Best In: All Year",
        photo: "./assets/Rose.jpg",
        description: "Keep in Mind: Sensitive to bacteria, it’s important to keep roses in clean vases with fresh water. Roses last longer in a cool area, but to entice them to open up a little quicker, temporarily place them in a warmer spot for six to eight hours."
    },
    {
        title: "Tulip",
        time:"Blooms Best In: Spring & Winter",
        photo: "./assets/Tulips_1.jpg",
        description: "Keep in Mind: Tulips tend to welt in the heat; they are best displayed in a cool area to maximise their longevity. If you spot any white ends on their stems, simply snip them off with scissors – it’ll help them drink water more easily."
    },
    {
        title: "Hydrangea",
        time:"Blooms Best In: Summer",
        photo: "./assets/Hydrangea.jpg",
        description: "Keep in Mind: Hydrangeas take in water from their petals, so it’s important to gently mist these once per day. If their flowers start to wilt, flip them upside down and soak the petal end of the flowers in cold water for a couple of minutes."
    },
    {
        title: "Ranunculus",
        time:"Blooms Best In:  Spring & Winter",
        photo: "./assets/Ranunculus.jpg",
        description: "Keep in Mind: Ranunculuses don’t need much water, however, they tend to be water polluters when kept in vases, so make sure to refresh the vase with clean water daily. These flowers also prefer to have a little extra breathing space making a vase with a wide opening their perfect home"
    },
    {
        title: "Lilac",
        time:"Blooms Best In:  Spring & Winter",
        photo: "./assets/Lilac.jpg",
        description: "Keep in Mind: Lilacs are particularly thirsty flowers, so remember to keep their vases topped up with fresh water daily."
    },
    {
        title: "Air Plant",
        time:"Prime Season: All Year",
        photo: "./assets/Ellermann__Air_Plants.jpg",
        description: "Keep in Mind: Air plants are relatively easy to care for as they only need to be watered once a week by submerging the plant completely in water for five minutes. If you live in a dry environment, increase watering to every 4 - 5 days."
    },
    {
        title: "Orchid",
        time:"Prime Season: All Year",
        photo: "./assets/Ellermann__Orchid.jpg",
        description: "Keep in Mind: Orchid leaves burn easily when placed under intense sunlight, and are happiest placed indoor with indirect sunlight. Orchids don’t need much to drink – watering them just once or twice a week sparingly with a tablespoon will keep them healthy."
    },
    {
        title: "Succulent",
        time:"Prime Season: All Year",
        photo: "./assets/Ellermann_Suculent.jpg",
        description: "Keep in Mind: Succulents are easy-going plants and can survive for weeks without water. Place them indoors with natural light and initially avoid bright, direct sunlight until they have fully adapted to their new home."
    }
]
// for types widget
typesData.forEach(function (element) {
    jQuery(".f-types-slider").append(`
        <div class="card">
        <img src="${element.photo}" class="card-img">
        <div class="card-shares">
            <button><img src="./assets/share.svg"/></button>
            <button><img src="./assets/fav.svg" /></button>
        </div>
        <div class="card-info">
            <p class="card-title">${element.name}</p>
            <span class="card-author">${element.description}</span>
            <div>
                <button type="button" class="btn btn-outline-light card-btn">See more</button>
            </div>
        </div>`)
});

// types widget slide
jQuery('.f-types-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: '<div class="slick-prev2 slick-arrow" aria-label="f-care" type="button"></div>',
    nextArrow: '<div class="slick-next2 slick-arrow" aria-label="Next" type="button"></div>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows:false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                dots: true,
                arrows:false
            }
        }
    ]
});

// for f-care widget
careData.forEach(function (element) {
    jQuery(".f-care-slider").append(`
    <div class="video-card row">
    <div class="col-lg-9 col-7">
    <p class="card-title">${element.title}</p>
    <p class="card-info">${element.time}</p>
    <p class="card-info desc">${element.description}</p>
    </div>
    <div class="col-lg-3 col-5">
    <img src="${element.photo}" class="card-img">
    </div>    
    </div>`)
});

// care widget slide
jQuery('.f-care-slider').slick({
    infinite: false,
    slidesPerRow: 1,
    rows: 3,
    arrows: true,
    prevArrow: '<div class="slick-prev-care slick-arrow" aria-label="f-care" type="button"></div>',
    nextArrow: '<div class="slick-next-care slick-arrow" aria-label="Next" type="button"></div>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesPerRow: 1,
                rows: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesPerRow: 1,
                rows: 2,
                dots:true,
                arrows:false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesPerRow: 1,
                rows: 2,
                dots:true,
                arrows:false
            }
        }
    ]
});