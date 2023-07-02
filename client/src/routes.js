import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/nav/header'
import Home from './components/home'

const Router = () => {
    return(
        <BrowserRouter>
            <Header />
            
            <Routes>
                <Route path='/' element={<Home/>}/>

            </Routes>
        </BrowserRouter>
    )
}
    
export default Router