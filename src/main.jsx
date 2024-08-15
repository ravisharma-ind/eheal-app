import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DoctorList from './pages/DoctorList.jsx'
import AboutPage from './pages/AboutPage.jsx';
import './index.css'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App/>}/>
      <Route path="/doctors" element={<DoctorList/>} />
      <Route path="/about" element={<AboutPage/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
