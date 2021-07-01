import React, {Component, useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ContactForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render(){
        return(
            <div>
                <Form id="contact-form">
                    <FormGroup row>
                        <Label for="name" sm={2}>Email</Label>
                        <Col sm={10}>
                        <Input className="inputStyle" type="text" name="name" id="name" placeholder="Full" />
                        </Col>
                    </FormGroup>
                    
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                        <Input className="inputStyle" type="email" name="email" id="exampleEmail" placeholder="Email Address" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="message" sm={2}>Text Area</Label>
                        <Col sm={10}>
                        <Input className="message" type="textarea" name="message" id="textArea" />
                        </Col>
                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                        </Col>
                    </FormGroup>                    
                </Form>
            </div>
        )
    }

    onChangeName(e){
        this.setState({name: e.target.value})
    }


    onChangeEmail(e){
        this.setState({email: e.target.value})
    }

    onChangeMessage(e){
        this.setState({message: e.target.value})
    }

    handleSubmit(e){
    }
    
}

export default ContactForm;