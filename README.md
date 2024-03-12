# Collection of react hooks to deal with canvas.

## useCanvasSequence

Just import the hook and use in your react component.
Make sure to supply it with a canvas element, and an array of img-src's.

You can now call render with any frame to display.

```jsx
import { useCanvasSequence } from  "@anthood/use-canvas"

function MyComponent() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { images, allImagesLoaded, render } = useCanvasSequence(canvasRef.current,sequence)

    const onSliderChange = (value: number): void => {
    const ctx = canvasRef.current?.getContext("2d")
    if (ctx) render(images[value], ctx)
  }

    return <canvas ref={canvasRef} />
}
```
