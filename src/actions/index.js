let addAction = (value) => {
    return { type: "ADD", payload: value };
}

let subtractAction = (value) => {
    return { type: "SUBTRACT", payload: value };
}

let clearAction = () => {
    return { type: "CLEAR" };
}

let addToMemoryAction = () => {
    return { type: "ADD_TO_MEMORY" }
}

const applyNumber = (value) => {
    return({type:'APPLY_NUMBER', payload: value});
}

export default{
    addAction,
    subtractAction,
    clearAction,
    addToMemoryAction,
    applyNumber,

}

