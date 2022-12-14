import React, { useEffect, useState } from 'react'
import { Link, Carousel, Button, InputGroup, Accordion, FormControl, Row, Col, ProgressBar, Form, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Offcanvas from 'react-bootstrap/Offcanvas';


AOS.init();
export default function Index() {

    return (
        <div>


            {/* .... Persona Sidebar......... */}

            <div className='forgot_psw_page'>
                <Example className='next_btn' />
            </div>

            {/* End.... */}


        </div>


    );
}

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    {
        ['Next'].map((end, idx) => (
            <OffCanvasExample key={idx} placement={end} name={end} />
        ))
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Today’s Weather</Offcanvas.Title>
                    <Offcanvas.Title><h5>Sep 13, 2022</h5></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='_weather'>
                        <h4>8°C</h4>
                        <img src={require('../images/cloud.png')} style={{ width: "93px" }} />
                    </div>

                    <div className='_profile'>
                        <div className='author_name'>
                            <img src={require('../images/avatar.png')} style={{ width: "60px" }} />
                            <h5>Full Name</h5>
                        </div>
                        <button><i class="fa-regular fa-pencil"></i>Edit</button>
                    </div>

                    <div className='_description'>
                        <div className='author_name'>
                            <i class="fa-solid fa-coin-blank"></i>
                        </div>
                        <div className='author_desc'>
                            <h4>Coins</h4>
                            <p>Lörem ipsum presevis. Nefafa. </p>
                        </div>
                    </div>

                    <div className='_description'>
                        <div className='author_name'>
                            <i class="fa-solid fa-fire-flame-curved"></i>
                        </div>
                        <div className='author_desc'>
                            <h4>Streaks</h4>
                            <p>Lörem ipsum presevis. Nefafa. </p>
                        </div>
                    </div>

                    <div className='_description'>
                        <div className='author_name'>
                            <i class="fa-solid fa-award"></i>
                        </div>
                        <div className='author_desc'>
                            <h4>Badges</h4>
                            <p>Lörem ipsum presevis. Nefafa. </p>
                        </div>
                    </div>

                    <div className='_description'>
                        <div className='author_name'>
                            <i class="fa-solid fa-trophy"></i>
                        </div>
                        <div className='author_desc'>
                            <h4>Trophies</h4>
                            <p>Lörem ipsum presevis. Nefafa. </p>
                        </div>
                    </div>

                    <div className='_description'>
                        <div className='author_name'>
                            <i class="fa-solid fa-medal"></i>
                        </div>
                        <div className='author_desc'>
                            <h4>Awards</h4>
                            <p>Lörem ipsum presevis. Nefafa. </p>
                        </div>
                    </div>

                    <div className='_description'>
                        <div className='author_name'>
                            <i class="fa-regular fa-award"></i>
                        </div>
                        <div className='author_desc'>
                            <h4>Patches</h4>
                            <p>Lörem ipsum presevis. Nefafa. </p>
                        </div>
                    </div>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Example() {
    return (
        <>
            {['Next'].map((end, idx) => (
                <OffCanvasExample key={idx} placement={end} name={end} />
            ))}
        </>
    );
}
