import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../assets/images/brookbush_logo.svg'

export default function TopNavbar() {
    const logoImg = logo

    return <div className='top-nav'>
        <Navbar variant='dark' bg="dark" expand="lg">
            <Container className='nav-container-1'>
                <Navbar.Brand className='logo-img' as="img" src={logoImg} href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="top-nav-1">
                    <NavDropdown title="About" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Partners</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Accreditations</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Education" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Videos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Articles</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Online Courses</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Webinar Registration</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Live Workshops</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#support">Support</Nav.Link>
                    <Nav.Link href="#home">Login</Nav.Link>
                    <Nav.Link href="signup">Sign UP</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
</div>
}