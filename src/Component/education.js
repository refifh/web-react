import React from 'react';
import { CardDeck, Container, Card } from 'react-bootstrap';
import kampus from '../assets/uii2.jpg';
import smala from '../assets/sman5.png';

const Pendidikan = () => {
    return (
        <div id='pendidikan'>
            <Container>
                <h1 Text style={{textAlignVertical: "center",textAlign: "center"}}>Educations</h1>
                <CardDeck>
                    <Card>
                        <Card.Img  variant="center" width='300px' src={smala} />
                        <Card.Body>
                            <Card.Title><h1>SMA Negeri 5 Purwokerto</h1></Card.Title>
                            <Card.Text>
                                <p>
                                    Jalan Gereja No.20 Purwokerto<br/> Banyumas, Jawa Tengah<br/> Natural Science <br/> Graduated Year : 2013 <br/>Average Score : -
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Senior High School</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="center" width='50%' src={kampus} />
                        <Card.Body>
                            <Card.Title><h1>Universitas Islam Indonesia</h1></Card.Title>
                            <Card.Text>
                                <p>
                                    Jalan Kaliurang KM 14.5<br/>Sleman, D.I. Yogyakarta<br/>Informatics <br/> Graduated Year : 2020<br/>GPA : 3,07
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Bachelor Degree</small>
                            </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
            
        </div>
    )
}

export default Pendidikan;
