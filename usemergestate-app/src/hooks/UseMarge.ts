import React, { useReducer } from 'react'

interface user {
    username: string,
    email: string,
    password: string,
}
const initialState: user = {
    username: "fw19_116",
    email: "gt29015@gmail.com",
    password: "12345",
};

function reducer(state: user, action:any): Partial<user> {
    switch (action.type) {
        case 'username':
            return { username: action.payload };
        case 'email':
            return { email: action.payload };
        case "password":
            return {password:action.payload};
            
    }
}
const UseMarge = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
        < /div>
    )
}

export default UseMarge