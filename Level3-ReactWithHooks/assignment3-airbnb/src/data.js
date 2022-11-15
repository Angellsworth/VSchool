// import Katie from "./images/katie-zaferes.png"
// import Wedding from "./images/wedding-photography.png"
// import Bike from "./images/mountain-bike.png"


export default [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "Sharing what Katie calls \"Positively Impactful Moments of Disappointment.\" In my career, the highest moments came from setbacks and losses. Learning from those moments gave me the ability to rise above and reach my goals.",
        price: 136,
        // coverImg: {Katie},
        coverImg: "katie-zaferes.png",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: 'wedding-photography.png',
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg:"mountain-bike.png",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
]