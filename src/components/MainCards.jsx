import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MainCards = (props) => {
  return (
    <>
      <Col className="text-center" id={props.song.id}>
        <Link to={`/album/${props.song.album.id}`}>
          <img className="img-fluid" src={props.song.album.cover_medium} alt="1" />
        </Link>
        <p>
          <Link to={`/album/${props.song.album.id}`}>
            Album: "{props.song.album.title.length < 16 ? `${props.song.album.title}` : `${props.song.album.title.substring(0, 16)}...`}"<br />
          </Link>
          <Link to={`/artist/${props.song.artist.id}`}>Artist: {props.song.artist.name}</Link>
        </p>
      </Col>
    </>
  );
};
