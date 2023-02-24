import { Button, Col, Row } from "react-bootstrap";
import { TopLinks } from "./TopLinks";

export const ArtistPage = () => {
  return (
    <>
      <Col class="col-12 col-md-9 offset-md-3 mainPage">
        <TopLinks />

        <Row>
          <Col xs={12} md={10} lg={10} className="mt-5">
            <h2 className="titleMain"></h2>
            <div id="followers"></div>
            <div class="d-flex justify-content-center" id="button-container">
              <Button class="btn btn-success mr-2 mainButton d-none" id="playButton">
                PLAY
              </Button>
              <Button class="btn btn-outline-light mainButton d-none" id="followButton">
                FOLLOW
              </Button>
            </div>
          </Col>
        </Row>
        <Row class="mb-3">
          <Col xs={10} md={10} lg={10} class="offset-1 p-0">
            <div class="mt-4 d-flex justify-content-start">
              <h2 class="text-white font-weight-bold">Tracks</h2>
            </div>
            <div class="pt-5 mb-5">
              <Row id="apiLoaded"></Row>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};
