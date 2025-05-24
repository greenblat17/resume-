'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageData {
  src: string
  orientation?: 'horizontal' | 'vertical'
}

interface ImageGalleryProps {
  images: (string | ImageData)[]
  alt: string
  projectName: string
}

export function ImageGallery({ images, alt, projectName }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  const getImageSrc = (image: string | ImageData): string => {
    return typeof image === 'string' ? image : image.src
  }

  const getImageOrientation = (image: string | ImageData): 'horizontal' | 'vertical' => {
    return typeof image === 'string' ? 'vertical' : (image.orientation || 'vertical')
  }

  const getThumbnailClasses = (orientation: 'horizontal' | 'vertical'): string => {
    const baseClasses = "relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all hover:scale-105"
    
    if (orientation === 'horizontal') {
      return `${baseClasses} w-24 h-16` // Горизонтальный формат (landscape)
    } else {
      return `${baseClasses} w-14 h-24` // Вертикальный формат (portrait)
    }
  }

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-thin">
        {images.map((image, index) => {
          const src = getImageSrc(image)
          const orientation = getImageOrientation(image)
          
          return (
            <div
              key={index}
              className={getThumbnailClasses(orientation)}
              onClick={() => openModal(index)}
            >
              <Image
                src={src}
                alt={`${alt} screenshot ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          )
        })}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X size={24} />
          </button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-16 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getImageSrc(images[selectedImage])}
              alt={`${alt} screenshot ${selectedImage + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
} 