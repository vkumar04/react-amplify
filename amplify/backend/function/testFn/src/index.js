const TODOS = [
    {"id": 1, "name": "wake up at 4am"},
    {"id": 2, "name": "wake up at 5 am"},
    {"id": 3, "name": "wake up at 3pm"}
]

function getTodos() {
    return TODOS;
}

function getTodoById(id){
    return TODOS.find(todo => todo.id === id)
}

exports.handler = async (event) => {
    console.log('event is ===>', event)
    const {typeName, fieldName, id} = event
    if(typeName === 'Query' && fieldName === 'todos'){
        const result = await getTodos()
        return result
    } if(typeName === 'Query' && fieldName === 'todoById'){
        const result = await getTodoById(id)
        return result
    }
}
