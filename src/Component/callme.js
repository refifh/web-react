import React from 'react';
import { Container, Card, CardDeck, Button } from 'react-bootstrap';
import Linkedin from '../assets/Logo/linkedin.png';
import Whatsapp from '../assets/Logo/whatsapp.png';
import Insgram from '../assets/Logo/instagram.png';
import Email from '../assets/Logo/logoemail.png';

const Hubsaya = () => {
    return (
        <div>
            <Container id='letstalk'><hr/>
                <h1 Text style={{textAlignVertical: "center",textAlign: "center"}}>Do you have any Project? Let’s Talk</h1>
                <CardDeck>
                    <Card><br/>
                        <Card.Img 
                            class="rounded mx-auto d-block"
                            width='50%' 
                            variant="center" 
                            src={Linkedin} />
                        <Card.Body>
                            <Card.Title><h3 Text style={{textAlignVertical: "center",textAlign: "center"}}>LinkedIn</h3></Card.Title>
                            <Card.Text>
                            Find me on LinkedIn <br/> <a href="https://www.linkedin.com/in/refi-ahmad-fahriza-b5930088/"><Button variant="info">Find me</Button></a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card><br/>
                        <Card.Img 
                            class="rounded mx-auto d-block" 
                            width='50%' 
                            variant="center" 
                            src={Whatsapp} />
                            <Card.Body>
                                <Card.Title><h3 Text style={{textAlignVertical: "center",textAlign: "center"}}>Whatsapp</h3></Card.Title>
                                <Card.Text>
                                    Call/text me on whatsapp <br/> <a href= "https://s.id/hubWaSaya"><Button variant="success">Click Here</Button></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card><br/>
                            <Card.Img 
                                class="rounded mx-auto d-block"
                                width='50%' 
                                variant="center" 
                                src={Insgram} />
                            <Card.Body>
                                <Card.Title><h3 Text style={{textAlignVertical: "center",textAlign: "center"}}>Instagram</h3></Card.Title>
                                <Card.Text>
                                    Find me on Instagram <br/><a href="https://www.instagram.com/refi_fahriza/"><Button variant="warning">Find me</Button></a>
                                </Card.Text>
                            </Card.Body>                            
                        </Card>
                        <Card><br/>
                            <Card.Img 
                                class="rounded mx-auto d-block" 
                                width='50%' 
                                variant="center" 
                                src={Email} />
                            <Card.Body>
                                <Card.Title><h3 Text style={{textAlignVertical: "center",textAlign: "center"}}>Email</h3></Card.Title>
                                <Card.Text> Send me email to {' '}
                                <br/><a href="mailto:refi.fahriza28@gmail.com"><Button variant="secondary">Send me a message</Button></a>
                                </Card.Text>
                            </Card.Body>                            
                        </Card>
                 </CardDeck>
            </Container>
        </div>
    )
}

export default Hubsaya
