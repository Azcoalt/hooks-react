import {Routes, Route, Navigate} from 'react-router-dom'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LogingPage } from './LogingPage'
import { Navbar } from './Navbar'
import { UseProvider } from './context/UseProvider'

export const MainApp = () => {
  return (
    <UseProvider>
        <Navbar/> 
        <hr/>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="login" element={<LogingPage/>}/>

            <Route path="/*" element={<Navigate to="/about"/>}/>
        </Routes>
    </UseProvider>
  )
}
