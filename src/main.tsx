import { createRoot } from 'react-dom/client'
import { UseCanvasSequence } from './components/useCanvasSequence'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(<UseCanvasSequence />)