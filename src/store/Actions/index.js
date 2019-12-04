export const addUser = (data)=>{
    return {
        type:'ADD_USER',
        payload:data
    }
}

export const deleteUser = (userid)=>{
    return {
        type:'DELETE_USER',
        payload:userid
    }
}