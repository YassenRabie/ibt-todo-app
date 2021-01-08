export default (state, action) => {

   switch (action.type) {
      case 'REMOVE_TODO':
         return (
            {
               ...state,
               todoItems: state.todoItems.filter(todo => {
                  return todo.id !== action.payload
               })
            }
         )

      case 'ADD_TODO':
         return (
            { ...state, todoItems: [action.payload, ...state.todoItems] }
         )

      case 'TOOGLE_COMPLETED':
         return (
            {
               ...state,
               todoItems: state.todoItems.map((todo) => {
                  var newTodo = todo
                  if (todo.id === action.payload) {
                     newTodo = {
                        ...todo,
                        completed: !todo.completed
                     }
                  }
                  return newTodo
               })
            }
         )

      case 'UPDATE_SEARCH_TEXT':
         return (
            { ...state, searchText: action.payload }
         )


      case 'UPDATE_DATE_FILTER':
         return (
            { ...state, dateFilter: action.payload }
         )

      case 'UPDATE_FILTER_TYPE':
         return (
            { ...state, filterType: action.payload }
         )

      default:
         return state
   }
}