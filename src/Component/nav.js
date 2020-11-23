import React from 'react';
import { Nav } from 'react-bootstrap';

const Navigasi = () => {
    return (
        <div>
            <Nav bg="light" variant="light" className="justify-content-end">
                <Nav.Item>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#pendidikan">Pendidikan</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#pengalaman">Pengalaman</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#letstalk">Hubungi Saya</Nav.Link>
                </Nav.Item>
                </Nav>
        </div>
    );
};

export default Navigasi;
