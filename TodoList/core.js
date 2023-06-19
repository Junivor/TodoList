export default function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')
}

export function createStore(reducer) {
    let state = reducer()
    const roots = new Map()
        function render() {
            for (const [root, component] of roots) {
                root.innerHTML = component()
            }
        }

    return {
        attach(component, root) {
            roots.set(root, component)
            render() 
        },
        //attach(app, root)
        connect(selector = state => state) {
            return component => (props, ...args)  =>
                component(Object.assign({}, props, selector(state), ...args)) //args có thể bỏ
        },
        //connector(TodoList, TodoItem, Footer)
        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render()
        }
        //Header   -> actions: add, args: title
        //TodoList -> actions: toggleAll, args: index
        //TodoItem -> actions: toggle, args: completed(default: false)
        //Footer   -> actions: clearCompleted: args: none
    }

}


