import { useRef, useState } from 'react'
import { Card, Row, Col, InputGroup, Form, Button } from 'react-bootstrap'
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';

// components
import WidgetDropdown from './WidgetDropdown'

let todoList = [
  {
    id: "1",
    text: "Design One page theme",
    done: false,
  },
  {
    id: "2",
    text: "Build a js based app",
    done: true,
  },
  {
    id: "3",
    text: "Creating component page",
    done: true,
  },
  {
    id: "4",
    text: "Testing??",
    done: true,
  },
  {
    id: "5",
    text: "Hehe!! This looks cool!",
    done: false,
  },
  {
    id: "6",
    text: "Create new version 3.0",
    done: false,
  },
  {
    id: "7",
    text: "Build an angular app",
    done: true,
  },
];

const Todo = () => {

  const [validated, setValidated] = useState(false);

  const [todo, setTodo] = useState(todoList);

  const textInput = useRef<any>('');
  const checkInput = useRef<any>();

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    setTodo([{
      id: textInput.current.value,
      text: textInput.current.value,
      done: false,
    }].concat(todo))
  };

  const handleChange = (e: any, id: string) => {
    let checkedItem = todoList.filter(item => item.id === id)
    if (checkedItem[0].done !== true) {
      return checkedItem[0].done = true
    }
    checkedItem[0].done = false
  }

  const handleArchive = (event: any) => {
    event.preventDefault()
    return setTodo(todo.filter((i) => i.done === false))
  }

  return (
    <>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h4 className="header-title">Todo</h4>
          <WidgetDropdown />
        </Card.Header>

        <div className="todoapp">
          <Card.Body className="py-0">
            <Row>
              <Col>
                <h5 id="todo-message"><span id="todo-remaining"></span> of <span id="todo-total"></span> remaining</h5>
              </Col>
              <Col className="col-auto">
                <Link to="#" className="float-end btn btn-light btn-sm" onClick={(e) => handleArchive(e)}>Archive</Link>
              </Col>
            </Row>
          </Card.Body>

          <SimpleBar className="card-body py-0 mb-0" style={{ maxHeight: 298 }} >
            <ul className="list-group list-group-flush todo-list" id="todo-list">
              {(todo || []).map((item, idx) => (
                <li className="list-group-item border-0 ps-0" key={idx}>
                  <div className="mb-0">
                    {
                      item.done ? <Form.Check ref={checkInput} type="checkbox" label={item.text} key={idx}>
                        <Form.Check.Input type="checkbox" defaultChecked name='todo' onChange={e => handleChange(e, item.id)} />
                        <Form.Check.Label><s>{item.text}</s></Form.Check.Label>
                      </Form.Check> : <Form.Check ref={checkInput} type="checkbox" label={item.text}>
                        <Form.Check.Input type="checkbox" name='todo' onChange={e => handleChange(e, item.id)} />
                        <Form.Check.Label><span>{item.text}</span></Form.Check.Label>
                      </Form.Check>
                    }
                  </div>
                </li>
              ))
              }
            </ul>
          </SimpleBar>

          <Card.Body className="pt-2">
            <Form noValidate validated={validated} onSubmit={handleSubmit} name="todo-form" id="todo-form">
              <Row>
                <Col>
                  <InputGroup hasValidation>
                    <Form.Control ref={textInput} type="text" id="todo-input-text" name="todo-input-text" placeholder="Add new todo" required />
                    <Form.Control.Feedback type='invalid'>
                      Please enter your task name
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
                <Col className="col-auto d-grid">
                  <Button variant='primary' className="btn-md btn waves-effect waves-light" type="submit" id="todo-btn-submit">Add</Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </div>
      </Card>
    </>
  )
}

export default Todo