import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import InfoNavbar from "components/Navbars/InfoNavbar.js";
import SportsHeader from "components/Headers/SportsHeader.js";
import FooterGray from "components/Footers/FooterGray.js";

function BlogPosts() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("blog-posts");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-posts");
    };
  });
  return (
    <>
      <InfoNavbar />
      <SportsHeader />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="6">
                  <h2>Korean Sports</h2>
                  <h3 className="title-uppercase">
                    <small>The Top3 Korean Sports</small>
                  </h3>
                </Col>
              </Row>
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="http://api.visitkorea.or.kr/search/searchDetail.do" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/sports/Worldcup.jpeg")}
                          />
                        </a>
                        <p className="image-thumb">Photo by Visit Seoul</p>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="primary">
                            Featured
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                            Seoul World Cup Stadium
                          </CardTitle>
                        </a>
                        <h6 className="title-uppercase">Address : 240, World cup-ro, Mapo-gu, Seoul  </h6>
                        <div className="card-description">
                          <p>
                            Seoul World Cup Stadium is shaped like a traditional Korean kite, and if seen from above, it looks as if a rectangular shield is being flown like a kite. 
                            The shape of the stadium represents flight towards victory, and it combines the hopes of the World Cup games and spirit and traditional culture of the Korean people. 
                            The very first impression the stadium gives is that it is very large. It provides over 60,000 seats, and in fact, in terms of area and facility, it is the best in Asia. 
                          </p>
                          <br />
                          <p>
                            There are also large screens on either side of the stadium for people wanting close-up view of the games. 
                            Near the stadium there are a variety of parks, ideal for leisurely walks. 
                            There are also five theme parks around the stadium – Peace Park, Nanjicheon Park, and Noeul Park among them. 
                          </p>
                          <br />
                          <p>
                            Thick groves of trees, modern street lights, and magnificent fountains make the parks ideal walking areas in the morning and evening. 
                            In the evenings, many in-line skaters come and hang out as well. 
                            The stadium is open from 9 to 5 pm, and many interpreters are always on duty. 
                          </p>
                          <br />
                          <p>
                            After the successful completion of the 2002 FIFA World Cup Korea/Japan, the Seoul World Cup Stadium has been leading the campaign to promote soccer culture, and is also a frontrunner in hosting various cultural events. 
                            Located within the facilities are also places to shop and enjoy cultural activities- providing all visitors with much to see and do. In Seoul, it is rising as a popular tourist spot.
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="www.oakvalley.co.kr" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/sports/OakValleySnowPark.jpg")}
                          />
                          <p className="image-thumb">Photo by Oak Valley</p>
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Featured
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                          Oak Valley Snow Park
                          </CardTitle>
                          <h6 className="title-uppercase">Address : 58, Oak valley 2-gil, Wonju-si, Gangwon-do </h6>
                        </a>
                        <div className="card-description">
                          <p>
                          Surrounded by a strikingly beautiful environment, the 1.4 million square meters Oak Valley Snow Park contains two beginner, five intermediate, and two advanced level courses. 
                          </p>
                          <br />
                          <p>
                          Each course presents a different theme, and the slopes have varying inclines. 
                          Oak Valley is a first-class resort complex providing condo facilities, a golf course, and various other subsidiary facilities. 
                          Oak Valley also offers special children’s facilities making it the perfect ski resort for the whole family. 
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />
              <div className="article">
                <Col className="ml-auto mr-auto" md="8">
                  <Card className="card-blog card-plain text-center">
                    <div className="card-image">
                      <a href="jungmungolf.visitkorea.or.kr" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={require("assets/img/sports/JungmunGolfClub.png")}
                        />
                        <p className="image-thumb">Photo by 072 GOLF</p>
                      </a>
                    </div>
                    <CardBody>
                      <div className="card-category">
                        <Badge className="main-tag" color="info">
                          Featured
                        </Badge>
                      </div>
                      <a href="javascrip: void(0);">
                        <CardTitle tag="h3">
                          Jungmun Golf Club
                        </CardTitle>
                        <h6 className="title-uppercase">Address : 60, Jungmungwangwang-ro 72beon-gil, Seogwipo-si, Jeju-do</h6>
                      </a>
                      <div className="card-description">
                        <p>
                        Opened in 1981, Jungmun Golf Club is located along the seaside cliffs of Jeju Island. 
                        It is open all year long, featuring a 18-hole golf course and a country club set up along a coastal area on Jeju Island. 
                        Picturesque scenery and various tourist amenities add to the charm of this golf club.
                        </p>
                        <br />
                        <p>- Korea's sole coastal golf course, embracing the valley as well as breathtaking views</p>
                        <p>- The course is filled with the western grass and a peaceful atmosphere</p>
                        <p>- Jeju-grown foliage and subtropical plants</p>
                        <p>- The longest course distance in Korea (B.T. 6,820 m)</p>
                        <p>- Open for both members and non-member tourists</p>
                        <p>- Tee-up on in-course and out-course at once</p>
                        <p>- Reservation required; international tourists are given priority</p>
                        <p>- Holes 8 and 11 have an optical illusion (uphill and downhill are reversed)</p>
                        <p>- Located within 5-min walking distance from the nearest hotel</p>
                      </div>
                    </CardBody>
                    <Button className="btn-round" color="danger" size="sm">
                      Read more
                    </Button>
                  </Card>
                </Col>
              </div>
              <hr />
              <Row>
                <Col md="12">
                  <div className="pull-left">
                    <Button
                      className="btn-link btn-move-left"
                      color="default"
                      size="sm"
                    >
                      <i className="fa fa-angle-left mr-1" />
                      Older Posts
                    </Button>
                  </div>
                  <div className="pull-right">
                    <Button
                      className="btn-link btn-move-right"
                      color="default"
                      size="sm"
                    >
                      Newer Posts <i className="fa fa-angle-right" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <FooterGray />
    </>
  );
}

export default BlogPosts;
