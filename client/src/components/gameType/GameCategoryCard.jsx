import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AfroStyles from "../../CardScrolling/AfroStyles"
import "./GameCategoryCard.css"
// import { GameCategories } from "../../editableFiles/GameCategory";


const GameCategories = [
  {
    icon: <i className="fa fa-home" style={{ fontSize: '24px' }}></i>,
    text: "Dashboard",
    index: 1
  },
  {
    icon: <i className='fa fa-history' style={{ fontSize: '24px' }}></i>,
    text: "Mail",
    index: 2
  },
  {
    icon: <i className='fa fa-play-circle' style={{ fontSize: '24px' }}></i>,
    text: "Recently played",
    index: 3
  },
  {
    icon: <i className='fa fa-plus-circle' style={{ fontSize: '24px' }}></i>,
    text: "New",
    index: 4
  },
  {
    icon: <i className='fa fa-trophy' style={{ fontSize: '24px' }}></i>,
    text: "Trending now",
    index: 5
  },
  {
    icon: <i className='fa fa-refresh' style={{ fontSize: '24px' }}></i>,
    text: "Updated",
    index: 6
  },
  {
    icon: <i className='fa fa-film' style={{ fontSize: '24px' }}></i>,
    text: "Originals",
    index: 7
  },
  {
    icon: <i className='fa fa-random' style={{ fontSize: '24px' }}></i>,
    text: "Random",
    index: 8
  },
  {
    icon: <i className='fa fa-users' style={{ fontSize: '24px' }}></i>,
    text: "2 Player",
    index: 9
  },
  {
    icon: <i className='fa fa-fighter-jet' style={{ fontSize: '24px' }}></i>,
    text: "Action",
    index: 10
  },
  {
    icon: <i className='fa fa-compass' style={{ fontSize: '24px' }}></i>,
    text: "Adventure",
    index: 11
  },
  // {
  //   icon: <i className='fa fa-basketball-ball' style={{ fontSize: '24px' }}></i>,
  //   text: "Basketball",
  //   index: 12
  // },
  {
    icon: <i className='fa fa-female' style={{ fontSize: '24px' }}></i>,
    text: "Beauty",
    index: 13
  },
  {
    icon: <i className='fa fa-motorcycle' style={{ fontSize: '24px' }}></i>,
    text: "Bike",
    index: 14
  },
  {
    icon: <i className='fa fa-car' style={{ fontSize: '24px' }}></i>,
    text: "Car",
    index: 15
  },
  {
    icon: <i className='fa fa-id-card' style={{ fontSize: '24px' }}></i>,
    text: "Card",
    index: 16
  },
  {
    icon: <i className='fa fa-users' style={{ fontSize: '24px' }}></i>,
    text: "Casual",
    index: 17
  },
  {
    icon: <i className='fa fa-mouse-pointer' style={{ fontSize: '24px' }}></i>,
    text: "Clicker",
    index: 18
  },
  {
    icon: <i className='fa fa-gamepad' style={{ fontSize: '24px' }}></i>,
    text: "Controller",
    index: 19
  },
  // {
  //   icon: <i className='fa fa-tshirt' style={{ fontSize: '24px' }}></i>,
  //   text: "Dress Up",
  //   index: 20
  // },
  {
    icon: <i className='fa fa-car' style={{ fontSize: '24px' }}></i>,
    text: "Driving",
    index: 21
  },
  // {
  //   icon: <i className='fa fa-door-open' style={{ fontSize: '24px' }}></i>,
  //   text: "Escape",
  //   index: 22
  // },
  {
    icon: <i className='fa fa-bolt' style={{ fontSize: '24px' }}></i>,
    text: "Flash",
    index: 23
  },
  {
    icon: <i className='fa fa-crosshairs' style={{ fontSize: '24px' }}></i>,
    text: "FPS",
    index: 24
  },
  // {
  //   icon: <i className='fa fa-skull' style={{ fontSize: '24px' }}></i>,
  //   text: "Horror",
  //   index: 25
  // },
  {
    icon: <i className='fa fa-globe' style={{ fontSize: '24px' }}></i>,
    text: ".io",
    index: 26
  },
  {
    icon: <i className='fa fa-building' style={{ fontSize: '24px' }}></i>,
    text: "Mahjong",
    index: 27
  },
  {
    icon: <i className='fa fa-cube' style={{ fontSize: '24px' }}></i>,
    text: "Minecraft",
    index: 28
  },
  {
    icon: <i className='fa fa-users' style={{ fontSize: '24px' }}></i>,
    text: "Multiplayer",
    index: 29
  },
  // {
  //   icon: <i className='fa fa-billiards' style={{ fontSize: '24px' }}></i>,
  //   text: "Pool",
  //   index: 30
  // },
  {
    icon: <i className='fa fa-puzzle-piece' style={{ fontSize: '24px' }}></i>,
    text: "Puzzle",
    index: 31
  },
  {
    icon: <i className='fa fa-bomb' style={{ fontSize: '24px' }}></i>,
    text: "Shooting",
    index: 32
  },
  // {
  //   icon: <i className='fa fa-futbol' style={{ fontSize: '24px' }}></i>,
  //   text: "Soccer",
  //   index: 33
  // },
  // {
  //   icon: <i className='fa-solid fa-basketball' style={{ fontSize: '24px' }}></i>,
  //   text: "Sports",
  //   index: 34
  // },
  {
    icon: <i className='fa fa-sticky-note' style={{ fontSize: '24px' }}></i>,
    text: "Stickman",
    index: 35
  },
  // {
  //   icon: <i className='fa fa-shield-alt' style={{ fontSize: '24px' }}></i>,
  //   text: "Tower Defense",
  //   index: 36
  // }
];

// const CategoryCard = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const cardWidth = 1000;

//   const handleLeftArrowClick = () => {
//     setScrollPosition(Math.max(0, scrollPosition - cardWidth));
//   };

//   const handleRightArrowClick = () => {
//     const containerWidth = document.querySelector(".game-card-container").offsetWidth;
//     const totalWidth = document.querySelector(".game-card-list").scrollWidth;
//     setScrollPosition(Math.min(scrollPosition + cardWidth, totalWidth - containerWidth));
//   };
//   return (
//     <>
//       <div className="Category-card-container">


//         {/* <div className="category-left-arrow" onClick={handleLeftArrowClick}>
//           <i class="categoryarrow left"></i>
//         </div> */}



//         {/* <div className="category-list-container"> */}
//           <div className="category-card-list" style={{ transform: `translateX(-${scrollPosition}px)` }}>

//             {GameCategories.map((category, index) => (
//               <div key={index} className="category1-card">
//                 {
//                   index % 2 !== 0 && <div className="category-card-img">
//                     <div className="icon1" style={{color:"whiteSmoke",display:"flex", justifyContent:"center"}}>{category.icon}</div>
//                     <div className="text1" style={{color:"whiteSmoke" ,display:"flex", justifyContent:"center"}}>{category.text}</div>
//                   </div>
//                 }

//               </div>
//             ))}
//           </div>
//           <div className="category-card-list" style={{ transform: `translateX(-${scrollPosition}px)` }}>

//             {GameCategories.map((category, index) => (
//               <div key={index} className="category1-card">
//                 {
//                   index % 2 === 0 && <div className="category-card-img">
//                     <div className="icon1" style={{color:"whiteSmoke",display:"flex", justifyContent:"center"}}>{category.icon}</div>
//                     <div className="text1" style={{color:"whiteSmoke" ,display:"flex", justifyContent:"center"}}>{category.text}</div>
//                   </div>
//                 }

//               </div>
//             ))}
//           </div>
//         {/* </div> */}

//         {/* <div className="category-right-arrow" onClick={handleRightArrowClick}>
//           <i class="categoryarrow right"></i>
//         </div> */}

//       </div>
//     </>
//   )
// }



const CategoryCard = () => {
    const settings = {
    // dots: true,
    speed: 2000,
    slidesToShow: Math.max(screen.width/60,4),
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    // autoplaySpeed: 1000,
    autoplaySpeed: 0,
    cssEase: 'linear',  
    responsive: [
      // {
      //     breakpoint: 1110,
      //     settings: {
      //         slidesToShow: 4,
      //         slidesToScroll: 3
      //     }
      // },
      {
          breakpoint: 872,
          settings: {
              slidesToShow: 8,
              slidesToScroll: 3
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 6,
              slidesToScroll: 3
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 6,
              slidesToScroll: 3
          }
      }
  ],
  };
  const settings2 = {
    // dots: true,
    speed: 2000,
    slidesToShow: Math.max(screen.width/60,4),
    slidesToScroll: -3,
    infinite: true,
    autoplay: true,
    // autoplaySpeed: 1000,
    initialSlide: 1,

    autoplaySpeed: 0,
cssEase: 'linear',          
// speed: 20000,

    responsive: [
      // {
      //     breakpoint: 1110,
      //     settings: {
      //         slidesToShow: 4,
      //         slidesToScroll: 3
      //     }
      // },
      {
          breakpoint: 872,
          settings: {
              slidesToShow: 8,
              slidesToScroll: -3
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 6,
              slidesToScroll: -3
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 6,
              slidesToScroll: -3
          }
      }
  ],
  };
  return (
    <>
      <div className="Category-card-container">
          {/* <div className="category-card-list"> */}
          <Slider {...settings}>
            {GameCategories.map((category, index) => (
              <div key={index} className="category1-card">
                {
                  index % 2 !== 0 && <div className="category-card-img">
                    <div className="icon1" style={{color:"whiteSmoke",display:"flex", justifyContent:"center"}}>{category.icon}</div>
                    <div className="text1" style={{color:"whiteSmoke" ,display:"flex", justifyContent:"center"}}>{category.text}</div>
                  </div>
                }
              </div>
              
            ))}
            </Slider>
          {/* </div> */}
          <Slider {...settings2}>
            {GameCategories.map((category, index) => (
              <div key={index} className="category1-card">
                {
                  index % 2 === 0 && <div className="category-card-img">
                    <div className="icon1" style={{color:"whiteSmoke",display:"flex", justifyContent:"center"}}>{category.icon}</div>
                    <div className="text1" style={{color:"whiteSmoke" ,display:"flex", justifyContent:"center"}}>{category.text}</div>
                  </div>
                }
              </div>
              
            ))}
            </Slider>
      

      </div>
    </>
  )
}




// const CategoryCard = () => {
//   const settings = {
//     dots: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 1000,
//   };
//   return (
//     <div className="content">
//       <h1 className="header">Afro Styles Fashion Store</h1>
//       <div className="container">
//         <Slider {...settings}>
//         {GameCategories.map((category, index) => (
//               <div key={index} className="category1-card">
//                 {
//                   index % 2 !== 0 && <div className="category-card-img">
//                     {/* <div className="icon1" style={{color:"whiteSmoke",display:"flex", justifyContent:"center"}}>{category.icon}</div> */}
//                     <div className="text1" style={{color:"whiteSmoke" ,display:"flex", justifyContent:"center"}}>{category.text}</div>
//                   </div>
//                 }

//               </div>
//             ))}
//         </Slider>
//       </div>
//     </div>
//   )
// }

export default CategoryCard; 