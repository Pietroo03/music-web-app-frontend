import './App.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import AppLayout from './layout/AppLayout'
import HomePage from './pages/HomePage'
import AlbumsPage from './pages/AlbumsPage'
import ArtistsPage from './pages/ArtistsPage'
import SingleAlbumPage from './pages/SingleAlbumPage'
import SingleArtistPage from './pages/SingleArtistPage'



function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>

            <Route path='/' element={<HomePage />}></Route>
            <Route path='/albums' element={<AlbumsPage />}></Route>
            <Route path='/artists' element={<ArtistsPage />}></Route>
            <Route path='/albums/:id' element={<SingleAlbumPage />}></Route>
            <Route path='/artists/:id' element={<SingleArtistPage />}></Route>





          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
