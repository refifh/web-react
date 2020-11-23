import React from 'react';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import Fotome from '../assets/foto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Identitas = () => {
    return (
        <div>
            <Container id='profil'>
                <Row>
                    <Col>
                        <Image src={Fotome}/>    
                    </Col>
                    <Col>
                        <h1><Badge variant="secondary">Refi Ahmad Fahriza</Badge></h1>
                        <FontAwesomeIcon icon="coffee" size="lg" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Identitas;
