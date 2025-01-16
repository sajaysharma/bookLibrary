import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json";
import Card from "./Card";

function Newscard() { 
    // const filterData = list.filter((data) => data.category == "Free");
    const filterData = [
        {
            "id":1,
            "name": "Book Name",
            "title" : "Some about the book story bagera dekhte hai baad me",
            "pric" : 0,
            "category" : "Free",
            "image": "https://img.freepik.com/free-vector/computer-infographic-old-style_1045-47.jpg?t=st=1736968396~exp=1736971996~hmac=d51022c5a9ba26667420b2129376743cb796a46d7cb24ebc49f256641c6afcbd&w=740"
        },
        {
            "id":2,
            "name": "Book Name",
            "title" : "Some about the book story bagera dekhte hai baad me",
            "pric" : 0,
            "category" : "Free",
            "image": "https://www.shutterstock.com/shutterstock/photos/1109184626/display_1500/stock-vector-realistic-vector-illustration-of-black-and-white-newspaper-layout-1109184626.jpg"
        },
        {
            "id":3,
            "name": "Book Name",
            "title" : "Some about the book story bagera dekhte hai baad me",
            "pric" : 0,
            "category" : "Free",
            "image": "https://img.freepik.com/free-vector/news-concept-landing-page-illustration_52683-18230.jpg?t=st=1736969479~exp=1736973079~hmac=d6732e9e14f792900968850ba70e5f94c6fac21eba0e466a81ec51876d3b2ae3&w=900"
        },
        {
            "id":4,
            "name": "Book Name",
            "title" : "Some about the book story bagera dekhte hai baad me",
            "pric" : 0,
            "category" : "Free",
            "image": "https://img.freepik.com/free-vector/news-concept-landing-page_52683-18598.jpg?t=st=1736969449~exp=1736973049~hmac=29fdd54eb1b57ca0ef8ebb03fc62b662806f99a7a1d425dac2add6b3175147bf&w=740"
        },
        {
            "id":5,
            "name": "Book Name",
            "title" : "Some about the book story bagera dekhte hai baad me",
            "pric" : 0,
            "category" : "Free",
            "image": "https://img.freepik.com/free-vector/news-concept-landing-page_52683-20706.jpg?t=st=1736968261~exp=1736971861~hmac=ff0ec77d94754dbd3785241bef4eae6789436da0c80a5dd05f002eeb712c8074&w=740"
        },
    ];
    

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="text-xl font-bold pb-2">News Paper Section</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi enim aperiam,
                        numquam doloribus voluptas, alias voluptatum eius nobis error
                        sapiente vel maiores ratione fugit provident animi illum, blanditiis aliquam magni?</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {filterData.map((item) => (
                            <Card item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Newscard;
