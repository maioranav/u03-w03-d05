import { Col, Row } from "react-bootstrap";
import { TopLinks } from "./TopLinks";

export const SearchPage = () => (
  <>
    <Col xs={12} md={9} className="offset-md-3 mainPage">
      <TopLinks />
      <Row>
        <Col xs={10}>
          <div id="searchResults">
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
          </div>
        </Col>
      </Row>
    </Col>
  </>
);
