import { useEffect, useRef, useState } from 'react'
import { render } from '../utils/render'

export const useCanvasSequence = (canvasElement: HTMLCanvasElement | null, imgSeq: string[]) => {
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [allImagesLoaded, setAllImagesLoaded] = useState<boolean>(false)

  const imgSeqRef = useRef(imgSeq)

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = new Array(imgSeqRef.current.length)
    let imagesLoadedCount = 0

    imgSeqRef.current.forEach((url: string, index: number) => {
      const img = new Image()
      img.src = url
      img.onload = () => {
        loadedImages[index] = img
        imagesLoadedCount += 1
        if (index === 0) {
          // Render the first image as soon as it's loaded
          setImages([img])
          const ctx = canvasElement?.getContext('2d')
          if (ctx) render(img, ctx)
        }
        if (imagesLoadedCount === imgSeqRef.current.length) {
          // All images have been loaded
          setImages(loadedImages)
          setAllImagesLoaded(true)
        }
      }
    })
  }, [canvasElement])

  return {
    images,
    allImagesLoaded,
    render,
  }
}
