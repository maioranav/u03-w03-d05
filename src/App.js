import { Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { SideBar } from './components/SideBar';

const App = () => {
  // const isLoading = useSelector(state => state.books.isLoading);
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <SideBar />

        </Row>
      </Container>

    </BrowserRouter >
  );
};

export default App;
