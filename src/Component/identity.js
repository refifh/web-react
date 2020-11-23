import React from 'react';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import Fotome from '../assets/foto.png';


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
                        <p>
                        My name Refi Ahmad Fahriza, 25 years old, bachelor degree of informatics from Universitas Islam Indonesia. I am a kind a passionate person to my job. I take my tasks seriously and be responsible to it. I am flexible, easy to get along with people. I got some skills as written in my CV such as code skills with PHP HTML, Python, understanding database system, GIT, JIRA, Adobe XD, ReactJS and React Native. Unless I am excited to learn new stuff and I love to develop myself.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Identitas;
