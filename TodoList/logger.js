export default function logger(reducer) {
    return (prevstate, action, args) => {
        console.group(action)
        console.log('Prev State:', prevstate)
        console.log('Action Arguments:', args)
        const nextState = reducer(prevstate, action, args)
        console.log('Next State:', nextState)
        console.groupEnd()
        return nextState
    }
}