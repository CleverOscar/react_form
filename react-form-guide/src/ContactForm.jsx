import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ContactForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {

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
                        <Label for="emailTextArea" sm={2}>Text Area</Label>
                        <Col sm={10}>
                        <Input className="textStyle" type="textarea" name="emialTextArea" id="textArea" />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
    
}

export default ContactForm;