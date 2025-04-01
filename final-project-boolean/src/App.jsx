import './App.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import AppLayout from './layout/AppLayout'
import HomePage from './pages/HomePage'
import AlbumsPage from './pages/AlbumsPage'

function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>

            <Route path='/' element={<HomePage />}></Route>
            <Route path='/albums' element={<AlbumsPage />}></Route>


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
