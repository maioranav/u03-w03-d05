import { Button } from "react-bootstrap";

export const AlbumCover = (props) => {
  return (
    <>
      <img src={props.albumDetails.cover} className="card-img img-fluid" alt="Album" />
      <div className="mt-4 text-center">
        <p className="album-title">{props.albumDetails.title}</p>
      </div>
      <div className="text-center">
        <p className="artist-name">{props.albumDetails.artist.name}</p>
      </div>
      <div className="mt-4 text-center">
        <Button id="btnPlay" className="btn-success" type="button">
          Play
        </Button>
      </div>
    </>
  );
};
