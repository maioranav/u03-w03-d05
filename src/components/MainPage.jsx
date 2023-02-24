import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { MainCards } from "./MainCards";
import { TopLinks } from "./TopLinks";

export const MainPage = () => {
  const [rockalbums, setRock] = useState([]);
  const [popalbums, setPop] = useState([]);
  const [hiphopalbums, setHiphop] = useState([]);

  let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });

  const fetchArtist = async (artist, genere) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist, {
        method: "GET",
        headers,
      }); // gets the information
      if (response.ok) {
        let result = await response.json(); // transforms the response to json
        let songInfo = result.data;
        switch (genere) {
          case "rock":
            setRock(rockalbums.concat(songInfo[0]));
            break;
          case "pop":
            setPop([...popalbums, songInfo[0]]);
            break;
          case "hiphop":
            setHiphop([...hiphopalbums, songInfo[0]]);
            break;
          default:
            console.log("switcherror");
        }
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderHome = async () => {
    let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];

    let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];

    let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];

    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let i = 0; i < rockRandomArtists.length; i++) {
      fetchArtist(rockRandomArtists[i], "rock");
    }
    for (let i = 0; i < popRandomArtists.length; i++) {
      fetchArtist(popRandomArtists[i], "pop");
    }
    for (let i = 0; i < hipHopRandomArtists.length; i++) {
      fetchArtist(hipHopRandomArtists[i], "hiphop");
    }
  };

  useEffect(() => {
    renderHome();
  }, []);

  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
      <TopLinks />
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {rockalbums && rockalbums.map((song) => <MainCards key={song.id} song={song} />)}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              {popalbums && popalbums.map((song) => <MainCards key={song.id} song={song} />)}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              {hiphopalbums && hiphopalbums.map((song) => <MainCards key={song.id} song={song} />)}
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
