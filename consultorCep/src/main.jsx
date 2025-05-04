import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import styles from './index.module.css'
import App from './App.jsx'

import FalarBack from './FalandoBack.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className={styles.mainDiv}>
      <FalarBack />
      <App />
    </div>
    
  </StrictMode>,
)
