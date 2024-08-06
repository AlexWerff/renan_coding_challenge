"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import PaginationCarousel from "./PaginationCarousel"

interface ImageCarouselProps {
  images: string[]
  autoSlide?: boolean
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoSlide = false,

}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImgSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const nextImgSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  useEffect(() => {
    if (!autoSlide) return

    const slideInterval = setInterval(nextImgSlide, 3000)
    return () => clearInterval(slideInterval)
  }, [autoSlide])

  return (
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden">
      <div className="relative h-96 md:h-[32rem] lg:h-[34rem]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
             <Image
              src={image}
              fill
              alt={`Slide ${index + 1}`}
              style={{ objectFit: "contain" }}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevImgSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        &lt;
      </button>
      <button
        onClick={nextImgSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        &gt;
      </button>
      <PaginationCarousel
        currentIndex={currentIndex}
        images={images}
        handlePressPagination={setCurrentIndex}
      />
    </div>
  )
}

export default ImageCarousel
