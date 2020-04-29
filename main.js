var upcomingData = [{
        title: "Better Health for a Better West Virginia",
        author: "Professor John Doe",
        blurphoto: "./assets/Group 31.png",
        photo: "./assets/Image 11.png",
        date: "Mon, May 11, 11:00 - 12:00PM"
    },
    {
        title: "Mylan Supports All Healthcare Workers on World Health Day",
        author: "Professor Merton Luca Piraino",
        blurphoto: "./assets/Group 31-1.png",
        photo: "./assets/Image 11-1.png",
        date: "Tue, May 14, 08:00 - 09:00PM"
    },
    {
        title: "Mylan Supports Young Entrepreneurs",
        author: "Professor Gracelyn Kiefer",
        blurphoto: "./assets/Group 31-2.png",
        photo: "./assets/Image 11-2.png",
        date: "Mon, May 11, 11:00 - 12:00PM"
    },
    {
        title: "Mylan - Built to Last: CEO Heather Bresch Presents at Investor Day 2018",
        author: "Professor Annamaria Orlando",
        blurphoto: "./assets/Group 31-3.png",
        photo: "./assets/Image 11-3.png",
        date: "Tue, May 14, 08:00 - 09:00PM"
    },
    {
        title: "Better Health for a Better West Virginia",
        author: "Professor John Doe",
        blurphoto: "./assets/Group 31.png",
        photo: "./assets/Image 11.png",
        date: "Mon, May 11, 11:00 - 12:00PM"
    },
    {
        title: "Mylan Supports All Healthcare Workers on World Health Day",
        author: "Professor Merton Luca Piraino",
        blurphoto: "./assets/Group 31-1.png",
        photo: "./assets/Image 11-1.png",
        date: "Tue, May 14, 08:00 - 09:00PM"
    },
    {
        title: "Mylan Supports Young Entrepreneurs",
        author: "Professor Gracelyn Kiefer",
        blurphoto: "./assets/Group 31-2.png",
        photo: "./assets/Image 11-2.png",
        date: "Mon, May 11, 11:00 - 12:00PM"
    },
    {
        title: "Mylan - Built to Last: CEO Heather Bresch Presents at Investor Day 2018",
        author: "Professor Annamaria Orlando",
        blurphoto: "./assets/Group 31-3.png",
        photo: "./assets/Image 11-3.png",
        date: "Tue, May 14, 08:00 - 09:00PM"
    }
]

var videoData = [{
        title: "Cardiovascular Disease Prevention",
        photo: "./assets/Rectangle 37.png",
        date: "Fri, Apr 22, 2020"
    },
    {
        title: "Cardiovascular Disease Prevention",
        photo: "./assets/Rectangle 37-1.png",
        date: "Fri, Apr 22, 2020"
    },
    {
        title: "Cardiovascular Disease Prevention",
        photo: "./assets/Rectangle 37-2.png",
        date: "Fri, Apr 22, 2020"
    },
    {
        title: "Cardiovascular Disease Prevention",
        photo: "./assets/Rectangle 37.png",
        date: "Fri, Apr 22, 2020"
    },
    {
        title: "Cardiovascular Disease Prevention",
        photo: "./assets/Rectangle 37-1.png",
        date: "Fri, Apr 22, 2020"
    },
    {
        title: "Cardiovascular Disease Prevention",
        photo: "./assets/Rectangle 37-2.png",
        date: "Fri, Apr 22, 2020"
    }
]
// for upcoming widget
upcomingData.forEach(function (element) {
    jQuery(".upcoming-slider").append(`
        <div class="card">
        <img src="${element.blurphoto}" data-src="${element.photo}" class="card-img">
        <div class="card-shares">
            <button><img src="./assets/share.svg"/></button>
            <button><img src="./assets/calendar.svg" /></button>
        </div>
        <div class="card-info">
            <span class="card-date">${element.date}</span>
            <p class="card-title">${element.title}</p>
            <span class="card-author">${element.author}</span>
            <div>
                <button type="button" class="btn btn-outline-light card-btn">Programme</button>
            </div>
        </div>`)
});

// upcoming widget slide
jQuery('.upcoming-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
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
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
            }
        }
    ]
});

// for previous widget
videoData.forEach(function (element) {
    jQuery(".previous-slider").append(`
    <div class="video-card">
    <img src="${element.photo}" class="card-img">
    <div class="play-btn">
    <p class="card-title">${element.title}</p>
    <button><img src="./assets/play.svg" /></button>
    </div>
    <span class="card-date">${element.date}</span>
</div>`)
});

// previous widget slide
jQuery('.previous-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
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
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});