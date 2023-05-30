import storage from "./util/storage.js"

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    editIndex: null,
}

const actions = {
    add({ todos }, title) {
        // Logic ở đây là nếu chúng ta không nhập gì thì cũng sẽ không có gì để xuất ra
        if(title) { 
            todos.push({ title, completed: false })
            storage.set(todos)
        } 
    },
    toggle({ todos }, index) {
        const todo = todos[index]
        todo.completed = !todo.completed
        storage.set(todos)
    },
    toggleAll({ todos }, completed) {
        todos.forEach(todo => todo.completed = completed)
        storage.set(todos)
    },
    destroy({ todos }, index) {
        todos.splice(index, 1)
        storage.set(todos)
    },
    switchFilter(state, filter) {
        /* Vì sao dùng state chỗ này: Tại vì { todos }[cấp-2] nằm cùng cấp với filter[cấp-2]
        * nên ta phải dùng state[cấp-1] để lấy thằng filter[cấp-2] */
        state.filter = filter
    },
    clearCompleted(state) {
        // Vì phải gán lại todo nên ta phải dùng state
        // Lọc và xoá những thằng completed
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    startEdit(state, index) {
        state.editIndex = index
    },
    endEdit(state, title) {
        if (state.editIndex !== null) {
            if(title) {
                state.todos[state.editIndex].title = title
                storage.set(state.todos)
            } else {
                this.destroy(state, state.editIndex)
            }

            state.editIndex = null
        }
        
    },
    cancelEdit(state) {
        state.editIndex = null
    }
}

export default function reducers(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}