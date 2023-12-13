import FormInput from "../FormInput"
import useTodoList from './useTodoList';

import SimpleBar from 'simplebar-react';

import { Card, Row, Col, Button } from 'react-bootstrap'
import WidgetDropdown from '../WidgetDropdown'
import { Link } from "react-router-dom";

type TodoListProps = {
  addTodo?: boolean;
  height?: string;
};

const TodoList = ({ addTodo, height }: TodoListProps) => {
  const {
    register,
    control,
    errors,
    todoData,
    handleSubmit,
    archiveTodos,
    toggleTodo,
    saveTodo,
    getInprogressTodos,
  } = useTodoList();
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
                <h5 id="todo-message"><span>{getInprogressTodos().length}</span> of <span>{todoData.length}</span> remaining</h5>
              </Col>
              <Col className="col-auto">
                <Link to='#' className="float-end btn btn-light btn-sm" onClick={archiveTodos}>Archive</Link>
              </Col>
            </Row>
          </Card.Body>

          <SimpleBar className="card-body py-0 mb-0" style={{ maxHeight: 298 }} >
            <ul className="list-group list-group-flush todo-list" id="todo-list">
              {(todoData || []).map((todo, idx) => (
                <li className="list-group-item border-0 ps-0" key={idx}>
                  <div className="form-check mb-0">
                    <input
                      type="checkbox"
                      className="form-check-input todo-done"
                      id={todo.id.toString()}
                      checked={todo.done}
                      onChange={() => toggleTodo(todo, idx)}
                    />
                    <label className="form-check-label" htmlFor={todo.id.toString()}>
                      {todo.done ? <s>{todo.text}</s> : todo.text}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </SimpleBar>

          <Card.Body className="pt-2">
            <form
              name="todo-form"
              id="todo-form"
              onSubmit={handleSubmit(saveTodo)}
              className="needs-validation"
            >
              <Row>
                <Col>
                  <FormInput
                    type="text"
                    name="newTodo"
                    className="form-control"
                    placeholder="Add new todo"
                    register={register}
                    key="newTodo"
                    errors={errors}
                    control={control}
                  />
                </Col>
                <Col className="col-auto">
                  <Button variant="primary" type="submit" className="waves-effect waves-light">
                    Add
                  </Button>
                </Col>
              </Row>
            </form>
          </Card.Body>

        </div>
      </Card>
    </>
  )
}

export default TodoList