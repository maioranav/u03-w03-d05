import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchByID } from "../redux/actions";
import { AlbumCover } from "./AlbumCover";
import { TopLinks } from "./TopLinks";

export const AlbumPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const albumDetails = useSelector((state) => state.album.albumres);

  useEffect(() => {
    dispatch(fetchByID(params.albumID, "album"));
  }, [params.albumID]);

  return (
    <>
      <Col xs={12} md={9} className="offset-md-3 mainPage">
        <TopLinks />
        <Row>
          <Col md={3} className="pt-5 text-center" id="img-container">
            {albumDetails && <AlbumCover albumDetails={albumDetails} />}
          </Col>
          <Col md={8} className="p-5">
            <Row>
              <Col md={10} className="mb-5" id="trackList">
                {albumDetails.tracks.data.map((track) => (
                  <div className="py-3 trackHover" key={track.id}>
                    <Link to="#" className="card-title trackHover px-3" style={{ color: "white" }}>
                      {track.title}
                    </Link>
                    <small className="duration" style={{ color: "white" }}>
                      {Math.floor(parseInt(track.duration) / 60)} :{" "}
                      {parseInt(track.duration) % 60 < 10 ? "0" + (parseInt(track.duration) % 60) : parseInt(track.duration) % 60}
                    </small>
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
};
