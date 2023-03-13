import React, { useEffect, useRef, useState, FormEvent } from "react";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
import "./TodoPage.scss";
//import TodoComponent from "../../components/TodoComponent/TodoComponent";
import moment from "moment";

export type TodoType = {
  id: number;
  task: number;
  todo: string;
  isDone: boolean;
  date: number;
};

function TodoPage() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todo, setTodo] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [countTask, setCountTask] = useState(0);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleDelete(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  const handleAdd = (event: FormEvent) => {
    event.preventDefault();
    if (inputRef.current?.value.length === 0) {
      return;
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        todo: `${inputRef.current?.value}`,
        isDone: false,
        date: Date.now(),
        task: countTask
      },
    ]);
    setTodo("");
    setCountTask(countTask+1);
  };

  const toggleDone = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  console.log("Todos : ", todos);

  return (
    <>
      <Container>
        <h1>Todo List</h1>
        {/* ADD Todo List */}
        <Row className="mb-3">
          <Form onSubmit={handleAdd}>
            <Row>
              <Col xs="10">
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Todo"
                    className="mb-3"
                    ref={inputRef}
                    value={todo}
                    onChange={(e) => {
                      setTodo(e.target.value);
                    }}
                  />
                </InputGroup>
              </Col>
              <Col xs="auto">
                <Button type="submit" size="lg">
                  ADD
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>

        {/* Display Todo List AND Delete Button*/}

        {todos.map((todo, key) => (
          <Row key={key} className="mb-3">
            <h1>---------------------------------------------------------------</h1>
            <Col xs="10">
              <h6>
                Create Date : {moment(todo.date).format("DD/MM/YY :h:mm:ss a")}{" "}
                | Task : {todo.task}
              </h6>
              <InputGroup.Text
                //className="mb-3"
                // id="basic-addon1"
                onClick={() => toggleDone(todo.id)}
                className={todo.isDone ? "done" : ""}
              >
                {todo.todo}
              </InputGroup.Text>
            </Col>
            <Col xs="auto">
              <br />
              <Button
                className="mt-1"
                variant="danger"
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                Delete
              </Button>
            </Col>
            <br/>
          </Row>          
        ))}
        <br/>

        {/* {todos.map((todo, key) => (
          <ul key={key}>
            <TodoComponent
              key={key}
              id={todo.id}
              todo={todo.todo}
              isDone={todo.isDone}
              toggleDone={toggleDone}
              deleteTodo={handleDelete}
            />
          </ul>
        ))} */}
      </Container>
    </>
  );
}

export default TodoPage;
