import { Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { AlbumPage } from './components/AlbumPage';
import { ArtistPage } from './components/ArtistPage';
import { CustFooter } from './components/CustFooter';
import { MainPage } from './components/MainPage';
import { SearchPage } from './components/SearchPage';
import { SideBar } from './components/SideBar';

const App = () => {
  // const isLoading = useSelector(state => state.books.isLoading);
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <SideBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="album/:albumID" element={<AlbumPage />} />
            <Route path="search/:query" element={<SearchPage />} />
            <Route path="artist/:artistID" element={<ArtistPage />} />
          </Routes>
        </Row>
      </Container>
      <CustFooter />
    </BrowserRouter >
  );
};

export default App;
