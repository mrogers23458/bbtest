import { Form, Button } from "react-bootstrap"
import usableImg from '../assets/images/brookbush-dashboard-desktop-screenshot.webp'
export default function Home () {
    const heroImg = usableImg
    return (
        <div className="home-box">
            <div className="header-member-box">
                <div className="header-title-box">
                    <h1 className="header-title-text">3 Certifications, 150+ Courses, and so much more.</h1>
                    <h2 className="header-subtitle-text">On Desktop or Mobile App. Get started today!</h2> 
                </div>
                <div className="member-box">
                <Form className="sign-up-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
            </div>
            <div className="hero-img-right">
                <img className="hero-img" src={heroImg}></img>
            </div>
        </div>
    )
}