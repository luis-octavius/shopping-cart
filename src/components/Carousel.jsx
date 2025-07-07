import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

export default function Carousel({ imgs }) {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prev) => {
      const newIndex = prev + n;
      return newIndex > imgs.length ? 1 : newIndex < 1 ? imgs.length : newIndex;
    });
  };

  const showSlides = (n) => {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    console.log(slides);

    if (slides[n - 1]) slides[n - 1].style.display = "block";
    if (dots[n - 1]) dots[n - 1].classList.add("active");
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <>
      <div className="slideshow-container fade">
        {imgs.map((img, index) => (
          <div key={index} className="mySlides fade">
            <div className="numbertext">
              {index + 1} / {imgs.length}
            </div>
            <img
              src={img}
              style={{ width: "100%" }}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}

        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
      <br />

      <div style={{ textAlign: "center " }}>
        {imgs.map((_, index) => {
          <span
            key={index}
            className={`dot ${slideIndex === index + 1 ? "active" : ""}`}
            onClick={() => currentSlide(index + 1)}
          ></span>;
        })}
      </div>
    </>
  );
}

Carousel.PropTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
