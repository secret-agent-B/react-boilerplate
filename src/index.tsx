import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client';

const dom = document.getElementById('root')!
const root = createRoot(dom)
root.render(<App></App>)
