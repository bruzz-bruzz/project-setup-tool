import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import Guide from './components/Guide.tsx'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/guide' element={<Guide />} />
        </Routes>
    </BrowserRouter>
)
