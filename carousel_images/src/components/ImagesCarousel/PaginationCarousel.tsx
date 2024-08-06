import React from 'react'

interface PaginationCarousel {
    images: string[]
    currentIndex: number
    handlePressPagination: (index: number) => void
}
const PaginationCarousel: React.FC<PaginationCarousel> = ({images, currentIndex, handlePressPagination}) => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handlePressPagination(index)}
            className={`h-3 w-3 z-10 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
  )
}

export default PaginationCarousel