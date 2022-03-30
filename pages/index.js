import { useRef, useState } from "react";
import { Navbar, Container, Nav, Button, Row, Col, Card, Modal, Form } from "react-bootstrap"
import './../styles/Home.module.css';
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import HomeImg from '../public/images/home.png';
import WhoImg from '../public/images/who.png';
import Tier1Img from '../public/images/tier1.png';
import Tier2Img from '../public/images/tier2.png';
import Tier3Img from '../public/images/tier3.png';
import WhereImg from '../public/images/where.png';

export default function Home() {
  const first = useRef(null);
  const about = useRef(null);
  const pricing = useRef(null);
  const contact = useRef(null);
  const [visible, setVisible] = useState(false);

  const scrollFirst = () => {
    first.current.scrollIntoView({ behavior: "smooth"});
  }
  const scrollAbout = () => {
    about.current.scrollIntoView({ behavior: "smooth"});
  }
  const scrollPricing = () => {
    pricing.current.scrollIntoView({ behavior: "smooth"});
  }
  const scrollContact = () => {
    contact.current.scrollIntoView({ behavior: "smooth"});
  }

  const handleClose = () => {
      setVisible(false)
  }
  return (
      <Container>
        <Modal show={visible} onHide={() => handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
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
          </Modal.Body>
        </Modal>
        <Navbar expand="lg" variant="light" sticky="top">
          <Container>
            <Navbar.Brand>
              <div onClick={() => scrollFirst()}>

                <h1>ERP Source</h1>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="menu"/>
            <Navbar.Collapse id="menu">
              <Nav.Link >
                <div onClick={() => scrollAbout()}>
                  About
                </div>
              </Nav.Link>
              <Nav.Link>
                <div onClick={() => scrollPricing()}>
                  Pricing
                </div>
              </Nav.Link>
              <Nav.Link>
                <div onClick={() => scrollContact()}>

                  Contact
                </div>
              </Nav.Link>
              <Nav.Link>
                <Button onClick={() => setVisible(true)} variant="outline-primary">Login</Button>
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Parallax>

          <Container ref={first} fluid>
            <Row>
              <Col xs={6} md={6} lg={6} xl={6}>
                <div style={{padding: 50}}>
                  <h1 style={{textAlign: 'center'}}>
                      Catat Keuangan Tanpa Ribet!
                  </h1>
                  <div style={{textAlign: 'center'}}>
                    <i>Cepat, Praktis, dan Solutif</i>
                  </div>
                </div>
              
              </Col>
              <Col xs={6} md={6} lg={6} xl={6}>
                <Image alt="ERP-HOME" src={HomeImg} layout="responsive" width={50} height={50}/>
              </Col>
              
            </Row>
          </Container>
          <Container ref={about} fluid>
            <Row>
              
              <Col xs={6} md={6} lg={6} xl={6}>
                <Image alt="ERP-ABOUT" src={WhoImg} layout="responsive" width={50} height={50}/>
              </Col>
              <Col xs={6} md={6} lg={6} xl={6}>
                <div style={{padding: 50}}>
                  <div style={{textAlign: 'center'}}>
                    <i>Siapakah Kami?</i>
                    <h5>Kami adalah sekelompok orang gila yang menemukan ide mengenai bagaimana mengerjakan dengan mudah tanpa susah, Pekerjaan anda adalah bagian dari kami, dan kami selalu berusaha untuk meningkatkan efisiensi kinerja</h5>
                  </div>
                </div>
              
              </Col>
              
            </Row>
          </Container>
          <Container style={{backgroundColor: '#C5C5C5', padding: 15}} ref={pricing} fluid>
            <Row>
              <Col xs={12} md={12} lg={12} xl={12}>
                <h1 style={{textAlign: 'center'}}>Apa yang Anda Dapatkan?</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4} lg={4} xl={4}>
                <Card style={{ width: '18rem' }}>
                  <Card.Header>
                    <Image alt="ERP-ABOUT" src={Tier1Img} layout="responsive" width={100} height={100}/>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Tier 1 / Basic</Card.Title>
                    <Card.Text>
                      Benefit: 
                    </Card.Text>
                    <Card.Text>
                      Mencatat Barang Masuk 
                    </Card.Text>
                    <Card.Text>
                      Mencatat Barang Keluar 
                    </Card.Text>
                    <Card.Text>
                      Mencatat Hasil Keuntungan 
                    </Card.Text>
                    <Button variant="primary">Buy Now!</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} lg={4} xl={4}>
                <Card style={{ width: '18rem' }}>
                  <Card.Header>
                    <Image alt="ERP-ABOUT" src={Tier2Img} layout="responsive" width={50} height={50}/>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Tier 2 / Business</Card.Title>
                    <Card.Text>
                      Benefit: 
                    </Card.Text>
                    <Card.Text>
                      Mencatat Barang Masuk dan Keluar
                    </Card.Text>
                    <Card.Text>
                      Mencatat Hasil Keuntungan 
                    </Card.Text>
                    <Card.Text>
                      Dapat Menganalisa Hasil Penjualan dengan CHART 
                    </Card.Text>
                    <Card.Text>
                      Support 7x24 Jam 
                    </Card.Text>
                    <Button variant="primary">Buy Now!</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} lg={4} xl={4}>
                <Card style={{ width: '18rem' }}>
                  <Card.Header>
                    <Image alt="ERP-ABOUT" src={Tier3Img} layout="responsive" width={50} height={50}/>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Tier 3 / Enterpreneur</Card.Title>
                    <Card.Text>
                      Benefit: 
                    </Card.Text>
                    <Card.Text>
                      Mencatat Barang Masuk dan Keluar
                    </Card.Text>
                    <Card.Text>
                      Mencatat Hasil Keuntungan 
                    </Card.Text>
                    <Card.Text>
                      Dapat Menganalisa Hasil Penjualan dengan CHART 
                    </Card.Text>
                    <Card.Text>
                      Support 7x24 Jam 
                    </Card.Text>
                    <Card.Text>
                      Export Data ke Excell 
                    </Card.Text>
                    <Card.Text>
                      AI Prediksi Penghasilan
                    </Card.Text>
                    <Button variant="primary">Buy Now!</Button>
                  </Card.Body>
                </Card>
              </Col>
              
              
            </Row>
          </Container>
          <Container ref={contact} fluid>
            <Row>
              <Col xs={6} md={6} lg={6} xl={6}>
                <div style={{padding: 50}}>
                  <h1 style={{textAlign: 'center'}}>
                      Alamat Kantor Kami :
                  </h1>
                  <div style={{textAlign: 'center'}}>
                    <i>Jl. Terus Maju Tanpa Gentar</i>
                  </div>
                </div>
              
              </Col>
              <Col xs={6} md={6} lg={6} xl={6}>
                <Image alt="ERP-HOME" src={WhereImg} layout="responsive" width={50} height={50}/>
              </Col>
              
            </Row>
          </Container>
        </Parallax>
      </Container>
  )
}
