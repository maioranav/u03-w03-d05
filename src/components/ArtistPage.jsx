import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchByID } from "../redux/actions";
import { TopLinks } from "./TopLinks";

export const ArtistPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const artistDetails = useSelector((state) => state.artist.artistres);

  useEffect(() => {
    dispatch(fetchByID(params.artistID, "artist"));
  }, [params.artistID]);

  return (
    <>
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <TopLinks />

        <Row>
          <Col xs={12} md={10} lg={10} className="mt-5">
            <h2 className="titleMain"></h2>
            <div id="followers"></div>
            <div className="d-flex justify-content-center" id="button-container">
              <Button className="btn btn-success mr-2 mainButton d-none" id="playButton">
                PLAY
              </Button>
              <Button className="btn btn-outline-light mainButton d-none" id="followButton">
                FOLLOW
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={10} md={10} lg={10} className="offset-1 p-0">
            <div className="mt-4 d-flex justify-content-start">
              <h2 className="text-white font-weight-bold">Tracks</h2>
            </div>
            <div className="pt-5 mb-5">
              <Row id="apiLoaded"></Row>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};
