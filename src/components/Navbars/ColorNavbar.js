import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import {withRouter} from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
// core components

function ColorNavbar({history}) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [location, setLocation ] = React.useState('');
  const [test, setTest] = React.useState('');
  const [ss, setSs] = React.useState('');
  const [tourname, setTourname] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [summery, setSummery] = React.useState('');
  const [tourname1, setTourname1] = React.useState('');
  const [address1, setAddress1] = React.useState('');
  const [summery1, setSummery1] = React.useState('');
  const [tourname2, setTourname2] = React.useState('');
  const [address2, setAddress2] = React.useState('');
  const [summery2, setSummery2] = React.useState('');


  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });


  const getData = ({name}) => {
    fetch(`http://172.31.36.93:8080/tour/list/address?location=${name}`, {
      method: "GET",
      headers: {
        Authorization: null
      },
    }

    ).then(res => res.json()).then(res => {
      
      localStorage.setItem('data', JSON.stringify(res));
     
      //console.log(res)
    })
  }
  // React.useEffect(() => {
  //   fetch(`http://172.31.17.90:8080/tour/list/address?location=${JSON.parse(localStorage.getItem('location'))}`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: null
  //     },
  //   }

  //   ).then(res => res.json()).then(res => {
  //     setSs(res);
  //     setTourname(res._embedded.tupleBackedMapList[0].tourName);
  //     setAddress(res._embedded.tupleBackedMapList[0].address);
  //     setSummery(res._embedded.tupleBackedMapList[0].summery);
  //     setTourname1(res._embedded.tupleBackedMapList[1].tourName);
  //     setAddress1(res._embedded.tupleBackedMapList[1].address);
  //     setSummery1(res._embedded.tupleBackedMapList[1].summery);
  //     setTourname2(res._embedded.tupleBackedMapList[2].tourName);
  //     setAddress2(res._embedded.tupleBackedMapList[2].address);
  //     setSummery2(res._embedded.tupleBackedMapList[2].summery);
  //     //console.log(res)

  //   })
  // }, [location]);


  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/presentation" tag={Link}>
              FRS team
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              FRS team
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  Theme
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/Culture" tag={Link}>
                    Culture
                  </DropdownItem>
                  <DropdownItem to="/Sports" tag={Link}>
                    Sports
                  </DropdownItem>
                  <DropdownItem
                    to="/Eat" tag={Link}
                    //href="https://demos.creative-tim.com/paper-kit-pro-react/#/documentation/introduction?ref=pkpr-color-navbar"
                    //target="_blank"
                  >
                    Eat
                  </DropdownItem>
                  <DropdownItem to="/Healing" tag={Link}>
                    Healing
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  Location
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/blog-post-seoul" 
                    tag={Link} 
                    name="Seoul"
                    onClick={e => {
                      setLocation(e.target.name);
                      localStorage.setItem('location', JSON.stringify(e.target.name));
                      getData({name: e.target.name});
                    }}
                  >
                    <i className="nc-icon nc-tile-56" />
                    Seoul
                  </DropdownItem>
                  <DropdownItem to="/blog-post-busan" tag={Link} 
                    name="Busan"
                    onClick={e => {
                      setLocation(e.target.name);
                      localStorage.setItem('location', JSON.stringify(e.target.name));
                      getData({name: e.target.name});
                    }}
                  >
                    <i className="nc-icon nc-settings" />
                    Busan
                  </DropdownItem>
                  <DropdownItem to="/blog-post-daegu" tag={Link}
                    name="Daegu"
                    onClick={e => {
                      setLocation(e.target.name);
                      localStorage.setItem('location', JSON.stringify(e.target.name));
                      getData({name: e.target.name});
                    }}
                  >
                    <i className="nc-icon nc-bullet-list-67" />
                    Daegu
                  </DropdownItem>
                  <DropdownItem to="/blog-post-daejeon" tag={Link}
                    name="Daejeon"
                    onClick={e => {
                      setLocation(e.target.name);
                      localStorage.setItem('location', JSON.stringify(e.target.name));
                      getData({name: e.target.name});
                    }}
                  >
                    <i className="nc-icon nc-single-02" />
                    Daejeon
                  </DropdownItem>
                  <DropdownItem to="/blog-post-gangwon" tag={Link}
                    name="Gangwon"
                    onClick={e => {
                      setLocation(e.target.name);
                      localStorage.setItem('location', JSON.stringify(e.target.name));
                      getData({name: e.target.name});
                    }}
                  >
                    <i className="nc-icon nc-calendar-60" />
                    Gangwon
                  </DropdownItem>
                  <DropdownItem to="/blog-post-jeonju" tag={Link}
                    name="Jeonju"
                    onClick={e => {
                      setLocation(e.target.name);
                      localStorage.setItem('location', JSON.stringify(e.target.name));
                      getData({name: e.target.name});
                    }}
                  >
                    <i className="nc-icon nc-money-coins" />
                    Jeonju
                  </DropdownItem>
                  <DropdownItem to="/blog-post-incheon" tag={Link}
                    name="Incheon"
                    onClick={e => {
                      setLocation(e.target.name);
                      localStorage.setItem('location', JSON.stringify(e.target.name));
                      getData({name: e.target.name});
                    }}
                  >
                    <i className="nc-icon nc-badge" />
                    Incheon
                  </DropdownItem>
                  <DropdownItem to="/blog-post-ulsan" tag={Link} 
                    name="Ulsan"
                    onClick={e => {
                      setLocation(e.target.name);
                      localStorage.setItem('location', JSON.stringify(e.target.name));
                      getData({name: e.target.name});
                    }}
                  >
                    <i className="nc-icon nc-mobile" />
                    Ulsan
                  </DropdownItem>
                  <DropdownItem to="/blog-post-jeju" tag={Link} 
                    name="Jeju"
                    onClick={e => {
                      setLocation(e.target.name);
                      localStorage.setItem('location', JSON.stringify(e.target.name));
                      getData({name: e.target.name});
                    }}
                  >
                    <i className="nc-icon nc-mobile" />
                    Jeju
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  Help
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/about-us" tag={Link}>
                    <i className="nc-icon nc-bank" />
                    About-us
                  </DropdownItem>
                  <DropdownItem to="/contact-us" tag={Link}>
                    <i className="nc-icon nc-mobile" />
                    Contact Us
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  Sections
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/sections#headers" tag={Link}>
                    <i className="nc-icon nc-tile-56" />
                    Headers
                  </DropdownItem>
                  <DropdownItem to="/sections#features" tag={Link}>
                    <i className="nc-icon nc-settings" />
                    Features
                  </DropdownItem>
                  <DropdownItem to="/sections#blogs" tag={Link}>
                    <i className="nc-icon nc-bullet-list-67" />
                    Blogs
                  </DropdownItem>
                  <DropdownItem to="/sections#teams" tag={Link}>
                    <i className="nc-icon nc-single-02" />
                    Teams
                  </DropdownItem>
                  <DropdownItem to="/sections#projects" tag={Link}>
                    <i className="nc-icon nc-calendar-60" />
                    Projects
                  </DropdownItem>
                  <DropdownItem to="/sections#pricing" tag={Link}>
                    <i className="nc-icon nc-money-coins" />
                    Pricing
                  </DropdownItem>
                  <DropdownItem to="/sections#testimonials" tag={Link}>
                    <i className="nc-icon nc-badge" />
                    Testimonials
                  </DropdownItem>
                  <DropdownItem to="/sections#contact-us" tag={Link}>
                    <i className="nc-icon nc-mobile" />
                    Contact Us
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="default" caret nav>
                  Examples
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/about-us" tag={Link}>
                    <i className="nc-icon nc-bank" />
                    About-us
                  </DropdownItem>
                  <DropdownItem to="/add-product" tag={Link}>
                    <i className="nc-icon nc-basket" />
                    Add Product
                  </DropdownItem>
                  <DropdownItem to="/blog-post" tag={Link}>
                    <i className="nc-icon nc-badge" />
                    Blog Post
                  </DropdownItem>
                  <DropdownItem to="/blog-posts" tag={Link}>
                    <i className="nc-icon nc-bullet-list-67" />
                    Blog Posts
                  </DropdownItem>
                  <DropdownItem to="/contact-us" tag={Link}>
                    <i className="nc-icon nc-mobile" />
                    Contact Us
                  </DropdownItem>
                  <DropdownItem to="/discover" tag={Link}>
                    <i className="nc-icon nc-world-2" />
                    Discover
                  </DropdownItem>
                  <DropdownItem to="/e-commerce" tag={Link}>
                    <i className="nc-icon nc-send" />
                    Ecommerce
                  </DropdownItem>
                  <DropdownItem to="/landing-page" tag={Link}>
                    <i className="nc-icon nc-spaceship" />
                    Landing Page
                  </DropdownItem>
                  <DropdownItem to="/login-page" tag={Link}>
                    <i className="nc-icon nc-lock-circle-open" />
                    Login Page
                  </DropdownItem>
                  <DropdownItem to="/product-page" tag={Link}>
                    <i className="nc-icon nc-album-2" />
                    Product Page
                  </DropdownItem>
                  <DropdownItem to="/profile-page" tag={Link}>
                    <i className="nc-icon nc-single-02" />
                    Profile Page
                  </DropdownItem>
                  <DropdownItem to="/register-page" tag={Link}>
                    <i className="nc-icon nc-bookmark-2" />
                    Register Page
                  </DropdownItem>
                  <DropdownItem to="/search-with-sidebar" tag={Link}>
                    <i className="nc-icon nc-zoom-split" />
                    Search Page
                  </DropdownItem>
                  <DropdownItem to="/settings" tag={Link}>
                    <i className="nc-icon nc-settings-gear-65" />
                    Settings Page
                  </DropdownItem>
                  <DropdownItem to="/twitter-redesign" tag={Link}>
                    <i className="nc-icon nc-tie-bow" />
                    Twitter
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem>
                {localStorage.getItem('email') ?
                  <Button
                    className="btn-round"
                    style={{backgroundColor: '#BF7E5D'}}
                    outline color="secondary"
                    to="/profile-page"
                  tag={Link}
                    //href="https://www.google.com/" //회원가입 사이트 만들기 or 페이지 넘어가기
                    //target="_blank"
                  >
                    {/* <i className="nc-icon nc-cart-simple" />  */}
                    My Page
                  </Button>
                  :
                  <Button
                    className="btn-round"
                    style={{backgroundColor: '#BF7E5D'}}
                    outline color="secondary"
                    to="/login-page" tag={Link}
                    //href="https://www.google.com/" //회원가입 사이트 만들기 or 페이지 넘어가기
                    //target="_blank"
                  >
                    {/* <i className="nc-icon nc-cart-simple" />  */}
                    Login
                  </Button>
                }
                {localStorage.getItem('email') || localStorage.getItem('token') ?
                <Button
                  className="btn-round"
                  style={{backgroundColor: '#BF7E5D'}}
                  outline color="secondary" tag={Link}
                  onClick={()=>{
                    localStorage.removeItem('email');
                    localStorage.removeItem('password');
                    localStorage.removeItem('token');

                    history.push('/presentation');
                  }}
                  //href="https://www.google.com/" //회원가입 사이트 만들기 or 페이지 넘어가기
                  //target="_blank"
                >
                  {/* <i className="nc-icon nc-cart-simple" />  */}
                  logout
                </Button>
                  :
                  <Button
                    className="btn-round"
                    style={{backgroundColor: '#BF7E5D'}}
                    outline color="secondary" tag={Link}
                    onClick={()=>{
                      history.push('/register-page');
                    }}
                    //href="https://www.google.com/" //회원가입 사이트 만들기 or 페이지 넘어가기
                    //target="_blank"
                  >
                    {/* <i className="nc-icon nc-cart-simple" />  */}
                Register Now
                  </Button>
                  }
              </NavItem>
              {/* <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                  href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkpr-color-navbar"
                  target="_blank"
                >
                  <i className="nc-icon nc-cart-simple" /> Buy Now
                </Button>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default withRouter(ColorNavbar);
