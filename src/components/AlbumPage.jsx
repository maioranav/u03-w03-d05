import { Col, Row } from "react-bootstrap";
import { TopLinks } from "./TopLinks";

export const AlbumPage = () => {
  return (
    <>
      <Col xs={12} md={9} className="offset-md-3 mainPage">
        <TopLinks />
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
