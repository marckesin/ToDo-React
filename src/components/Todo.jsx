import React from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => { props.toggleTaskCompleted(props.id) }}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <Button
          type="button"
          className="btn"
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          size="large"
        >
          Edit <span className="visually-hidden">{props.name}</span>
        </Button>
        <Button
          type="button"
          className="btn btn__danger"
          onClick={() => { props.deleteTask(props.id) }}
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          size="large"
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </Button>
      </div>
    </li>
  );
}