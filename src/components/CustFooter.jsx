import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FavSwitcher } from "./FavSwitcher";

export const CustFooter = () => {
  const currentPlaying = useSelector((state) => state.player);

  return (
    <>
      <Container fluid className="fixed-bottom bg-container pt-1">
        <Row>
          <Col lg={10} className="offset-lg-2">
            <Row>
              <Col xs={6} md={4} lg={4} className="offset-3 offset-md-4 offset-lg-4 playerControls mt-1">
                <Row>
                  {currentPlaying.id && (
                    <>
                      <h6 className="text-light text-center w-100">
                        {currentPlaying.title} - {currentPlaying.artist} <FavSwitcher id={currentPlaying.id} />
                      </h6>
                    </>
                  )}
                </Row>
                <Row>
                  <a href="#">
                    <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="playerbuttons/Previous.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="playerbuttons/Play.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="playerbuttons/Next.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="playerbuttons/Repeat.png" alt="shuffle" />
                  </a>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center playBar py-3">
              <Col xs={8} md={6}>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
