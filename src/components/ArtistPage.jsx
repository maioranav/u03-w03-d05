import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchByID } from "../redux/actions";
import { TopLinks } from "./TopLinks";

export const ArtistPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const artist = useSelector((state) => state.artist.artistres);
  const albums = useSelector((state) => state.search.search);

  useEffect(() => {
    dispatch(fetchByID(params.artistID, "artist"));
  }, [params.artistID]);

  return (
    <>
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <TopLinks />

        <Row>
          <Col xs={12} md={10} lg={10} className="mt-5">
            <h2 className="titleMain">{artist.name}</h2>
            <div id="followers">{artist.nb_fan} followers</div>
            <div className="d-flex justify-content-center" id="button-container">
              <Button className="btn btn-success mr-2 mainButton d-inline" id="playButton">
                PLAY
              </Button>
              <Button className="btn btn-outline-light mainButton d-inline" id="followButton">
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
              <Row id="apiLoaded">
                {albums.map((songInfo) => (
                  <div key={songInfo.id} className="col-sm-auto col-md-auto text-center mb-5">
                    <Link to={`/album/${songInfo.album.id}`}>
                      <img className="img-fluid" src={songInfo.album.cover_medium} alt="1" />
                    </Link>
                    <p>
                      <Link to="#">
                        Track: "
                        {
                          songInfo.title.length < 16 ? `${songInfo.title}` : `${songInfo.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                        }
                        "
                      </Link>
                      <br />
                      <Link to={`/album/${songInfo.album.id}`}>
                        Album: "
                        {
                          songInfo.album.title.length < 16 ? `${songInfo.album.title}` : `${songInfo.album.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                        }
                        "
                      </Link>
                    </p>
                  </div>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};
