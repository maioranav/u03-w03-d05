import { Col, Row } from "react-bootstrap";

export const AlbumPage = () => {
  return (
    <>
      <Col xs={12} md={9} className="offset-md-3 mainPage">
        <Row className="mb-3">
          <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="pt-5 text-center" id="img-container"></Col>
          <Col md={8} className="p-5">
            <Row>
              <Col md={10} className="mb-5" id="trackList"></Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
};
