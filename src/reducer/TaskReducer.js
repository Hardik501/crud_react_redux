
const taskReducer = (state=[], action)=>{
    switch(action.type){
        case 'ADD_TASK':
            return state.concat([action.data]);
        case 'DELETE_TASK':
            return state.filter((task)=>task.id !== action.id)
        case 'EDIT_TASK':
            return state.map((task)=>task.id === action.id?{...task,editing:!task.editing}:task)
        case 'UPDATE':
            return state.map((task)=>{
                if(task.id === action.id){
                    return{
                        ...task,
                        editing:!task.editing,
                        task:action.data.newtask,
                        number:action.data.number,
                        pass:action.data.pass
                    }
                }else return task;
            })
        default:
            return state;
    }

}

export default taskReducer;