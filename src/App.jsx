import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import './index.css'
import TastemapRouter from './components/nav/TastemapRouter.jsx'

createRoot(document.getElementById('root')).render(
  <TastemapRouter />
)