import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navigasi = () => {
    return (
        <div>
            <Navbar fixed="top"  bg="light" variant="light" className="justify-content-end">
                
                    <Nav.Item>
                        <Nav.Link href="#profil">Profil</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#pendidikan">Educations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#pengalaman">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#letstalk">Hire Me</Nav.Link>
                    </Nav.Item>
                
            </Navbar>
            
        </div>
    );
};

export default Navigasi;
