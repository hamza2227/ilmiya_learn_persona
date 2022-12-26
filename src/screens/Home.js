import React, { useEffect, useState } from 'react'
import { Link, Carousel, Button, InputGroup, Accordion, FormControl, Row, Col, ProgressBar, Form, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import Sonnet from '../../components/Sonnet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Offcanvas from 'react-bootstrap/Offcanvas';


AOS.init();
export default function Index() {

    return (
        <div>


            {/* .... Persona profile Sidebar......... */}
            <div className='_profile'>
                <Example className='next_btn' />
            </div>
            {/* End.... */}

            {/* .....Profile Fill detail */}
            <div className='pro_fill_detail'>
                <div className='_close_window'>
                    <i class="fa-regular fa-xmark"></i>
                </div>

                <div className='fill_detail_container'>
                    <div className='_user_profile'>
                        <img src={require('../images/puppyAvatar.png')} style={{ width: "170px" }} />
                        <p>Tim Jacob</p>
                    </div>
                    <div className='_user_stacks'>
                        <div className='user_day_streaks'>
                            <img src={require('../images/flame.png')} style={{ width: "48px" }} />
                            <p>09<span>Day streak</span></p>
                        </div>
                        <div className='user_day_streaks'>
                            <img src={require('../images/thunderbolt.png')} style={{ width: "48px" }} />
                            <p>124<span>XP</span></p>
                        </div>
                        <div className='user_day_streaks'>
                            <img src={require('../images/medal.png')} style={{ width: "48px" }} />
                            <p>264<span>Badges</span></p>
                        </div>
                    </div>
                    <div className='_user_stacks'>
                        <div className='user_day_streaks'>
                            <img src={require('../images/trophy.png')} style={{ width: "48px" }} />
                            <p>02<span>Trophies</span></p>
                        </div>
                        <div className='user_day_streaks'>
                            <img src={require('../images/certificate.jpg')} style={{ width: "48px" }} />
                            <p>02<span>Certificates</span></p>
                        </div>
                    </div>

                    <button className='change_profile_btn'>Change Profile Picture</button>
                </div>
            </div>
            {/* End.... */}

            {/* .....Profile Choose Avatar */}
            <div className='pro_choose_avatar'>
                <div className='_close_window'>
                    <i class="fa-regular fa-xmark"></i>
                </div>

                <div className='fill_detail_container'>
                    <div className='_user_profile'>
                        <img src={require('../images/puppyAvatar.png')} style={{ width: "85px" }} />
                        <div className='auhtor_name'>
                            <h2>Tim Jacob</h2>
                            <p>Please choose your Avatar</p>
                        </div>
                    </div>

                    <div className='avatar_tabs'>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Home">

                                <div className='_avatars_collection'>
                                    <img src={require('../images/puppyAvatar.png')} style={{ width: "85px" }} />
                                    <img src={require('../images/puppyAvatar.png')} style={{ width: "85px" }} />
                                    <img src={require('../images/puppyAvatar.png')} style={{ width: "85px" }} />
                                    <img src={require('../images/puppyAvatar.png')} style={{ width: "85px" }} />
                                    <img src={require('../images/puppyAvatar.png')} style={{ width: "85px" }} />
                                    <img src={require('../images/puppyAvatar.png')} style={{ width: "85px" }} />
                                    <img src={require('../images/puppyAvatar.png')} style={{ width: "85px" }} />
                                </div>
                                <div className='_avatars_collection'>
                                    <img src={require('../images/rabit.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/rabit.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/rabit.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/rabit.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/rabit.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/rabit.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/rabit.jpg')} style={{ width: "85px" }} />
                                </div>
                                <div className='_avatars_collection'>
                                    <img src={require('../images/rabit.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/rabit.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/rabit.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/rabit.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/rabit.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/rabit.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/rabit.jpg')} style={{ width: "85px" }} />
                                </div>
                                <div className='_avatars_collection'>
                                    <img src={require('../images/dog.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/dog.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/dog.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/dog.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/dog.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/dog.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/dog.jpg')} style={{ width: "85px" }} />
                                </div>
                                <div className='_avatars_collection'>
                                    <img src={require('../images/mouse.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mouse.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mouse.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mouse.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mouse.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mouse.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mouse.jpg')} style={{ width: "85px" }} />
                                </div>
                                <div className='_avatars_collection'>
                                    <img src={require('../images/mouse.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mouse.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mouse.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mouse.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mouse.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mouse.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mouse.jpg')} style={{ width: "85px" }} />
                                </div>

                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                                <div className='_patches_collection'>
                                    <img src={require('../images/mountainB.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainB.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainB.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainB.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainB.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainB.jpg')} style={{ width: "85px" }} />
                                </div>
                                <div className='_patches_collection'>
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                </div>
                                <div className='_patches_collection'>
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                </div>
                                <div className='_patches_collection'>
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                </div>
                                <div className='_patches_collection'>
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainO.jpg')} style={{ width: "85px" }} />
                                </div>
                                <div className='_patches_collection'>
                                    <img src={require('../images/mountainB.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainB.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainB.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainB.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainB.jpg')} style={{ width: "85px" }} />
                                    <img src={require('../images/mountainB.jpg')} style={{ width: "85px" }} />
                                </div>
                            </Tab>
                        </Tabs>
                    </div>


                </div>
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
