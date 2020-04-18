import { createStore } from "redux";

//prevent mistakes while typing strings
const ADD = "ADD";
const DELETE = "DELETE";

export function addTodo(text: string) {
  return { type: ADD, text } as const;
}

export function deleteTodo(id: number) {
  return { type: DELETE, id } as const;
}

type AddTodoAction = ReturnType<typeof addTodo>;
type deleteTodoAction = ReturnType<typeof deleteTodo>;
//reducer NEVER use state mutation like "state.push()"
//it should utilize the function that replace the previous one with the whoely new one
//So, I use "filter()" not "push()"
const reducer = (
  state: any[] = [],
  action: AddTodoAction | deleteTodoAction
) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo: any) => toDo !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
