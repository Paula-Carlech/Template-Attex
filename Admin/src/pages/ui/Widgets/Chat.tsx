import { useState } from 'react';
import SimpleBar from 'simplebar-react';
import { Button, Card, Col, Row, Form, InputGroup } from 'react-bootstrap';

import { chatMessages } from './data'
import WidgetDropdown from '../../../components/WidgetDropdown';

const Chat = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h4 className="header-title">Chat</h4>
          <WidgetDropdown />
        </Card.Header>

        <div className="chat-conversation">
          <SimpleBar className="card-body py-0 mb-3" style={{ height: 322 }}>
            <ul className="conversation-list">
              {(chatMessages || []).map((item, idx) => (
                <li className={item.class} key={idx}>
                  <div className="chat-avatar">
                    <img src={item.img} alt="male" />
                    <i>{item.time}</i>
                  </div>
                  <div className="conversation-text">
                    <div className="ctext-wrap">
                      <i>{item.name}</i>
                      <p>{item.message}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </SimpleBar>

          <Card.Body className="pt-0">
            <Form noValidate validated={validated} onSubmit={handleSubmit} name="chat-form" id="chat-form">
              <Row className="align-items-start">
                <Col>
                  <InputGroup hasValidation>
                    <Form.Control type="text" className="chat-input" placeholder="Enter your text" required />
                    <Form.Control.Feedback type='invalid'>
                      Please enter your messsage
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
                <Col className="col-auto d-grid">
                  <Button variant='danger' type="submit" className="chat-send waves-effect waves-light">Send</Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </div>
      </Card>
    </>
  )
}

export default Chat