export interface Todo {
  id: number,
  text: string,
  completed?: boolean
}

export interface StateTree {
  todos: Todo[],
  visibilityFilter: string,
}