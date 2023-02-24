import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../redux/actions";
import { TopLinks } from "./TopLinks";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const searchResults = useSelector((state) => state.search.search);

  useEffect(() => {
    dispatch(fetchData(params.query));
  }, [params.query]);

  return (
    <>
      <Col xs={12} md={9} className="offset-md-3 mainPage">
        <TopLinks />
        <Row>
          <Col xs={10}>
            <div id="searchResults">
              <h2>Search Results</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {searchResults.map((song) => (
                  <Col className="text-center" key={song.id}>
                    <Link to={`/album/${song.album.id}`}>
                      <img className="img-fluid" src={song.album.cover_medium} alt="1" />
                    </Link>
                    <p>
                      <Link to={`/album/${song.album.id}`}>
                        Album: "{song.album.title.length < 16 ? `${song.album.title}` : `${song.album.title.substring(0, 16)}...`}"
                        <br />
                      </Link>
                      <Link to={`/artist/${song.artist.id}`}>Artist: {song.artist.name}</Link>
                    </p>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};
