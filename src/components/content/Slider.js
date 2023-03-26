import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import "./Slider.css";

const images = [
    {
      component:<>
      <div style={{ display: "grid" }}>
          {/* You can use a GatsbyImage component if the image is dynamic */}
          <StaticImage
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              // maxHeight: 600,
              backgroundAttachment: "fixed",
            }}
            // You can optionally force an aspect ratio for the generated image
            aspectRatio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
            src={"../../images/hero.jpeg"}
            formats={["auto", "webp", "avif"]}
          />
          <div
            className="hero-bg"
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            {/* Any content here will be centered in the component */}
          </div>
        </div>
      </>,
      title: "Slide 1 Title",
      description: "Slide 1 Description",
    },
    {
        component:<>
        <div style={{ display: "grid" }}>
            {/* You can use a GatsbyImage component if the image is dynamic */}
            <StaticImage
              style={{
                gridArea: "1/1",
                // You can set a maximum height for the image, if you wish.
                // maxHeight: 600,
                backgroundAttachment: "fixed",
              }}
              // You can optionally force an aspect ratio for the generated image
              aspectRatio={3 / 1}
              // This is a presentational image, so the alt should be an empty string
              alt=""
              // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
              src={"../../images/hero.jpeg"}
              formats={["auto", "webp", "avif"]}
            />
            <div
              className="hero-bg"
              style={{
                // By using the same grid area for both, they are stacked on top of each other
                gridArea: "1/1",
                position: "relative",
                // This centers the other elements inside the hero component
                placeItems: "center",
                display: "grid",
              }}
            >
              {/* Any content here will be centered in the component */}
            </div>
          </div>
        </>,
      title: "Slide 2 Title",
      description: "Slide 2 Description",
    },
    {
        component:<>
        <div style={{ display: "grid" }}>
            {/* You can use a GatsbyImage component if the image is dynamic */}
            <StaticImage
              style={{
                gridArea: "1/1",
                // You can set a maximum height for the image, if you wish.
                // maxHeight: 600,
                backgroundAttachment: "fixed",
              }}
              // You can optionally force an aspect ratio for the generated image
              aspectRatio={3 / 1}
              // This is a presentational image, so the alt should be an empty string
              alt=""
              // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
              src={"../../images/hero.jpeg"}
              formats={["auto", "webp", "avif"]}
            />
            <div
              className="hero-bg"
              style={{
                // By using the same grid area for both, they are stacked on top of each other
                gridArea: "1/1",
                position: "relative",
                // This centers the other elements inside the hero component
                placeItems: "center",
                display: "grid",
              }}
            >
              {/* Any content here will be centered in the component */}
            </div>
          </div>
        </>,
      title: "Slide 3 Title",
      description: "Slide 3 Description",
    },
  ];
  

  export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    // Define autoplay settings
    const autoplayRef = useRef(null);
    const autoplayDelay = 5000;
  
    // Advance to the next slide automatically
    const handleAutoplay = useCallback(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, [currentSlide]);
  
    // Start autoplay on mount and clear it on unmount
    useEffect(() => {
      autoplayRef.current = setInterval(handleAutoplay, autoplayDelay);
      return () => clearInterval(autoplayRef.current);
    }, [handleAutoplay]);
  
    const handlePrev = () => {
      setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };
  
    const handleNext = () => {
      setCurrentSlide((currentSlide + 1) % images.length);
    };
  
    return (
      <div className="slider-container">
        <div className="slider" style={{ left: -currentSlide * 100 + "%" }}>
          {images.map((slide, index) => (
            <div key={index} className="slide">
              {slide.component}
            </div>
          ))}
        </div>
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="arrow right-arrow" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    );
  }
  
