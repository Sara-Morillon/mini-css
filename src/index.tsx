import { createRoot } from 'react-dom/client'
import './css/index.less'
import { App } from './ui/App'

const container = document.getElementById('root')

if (container) {
  createRoot(container).render(<App />)
}
