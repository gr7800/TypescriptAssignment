import { useState } from "react";

type User ={
    username?: string;
    password?: string | number;
    email?: string | number;
}

export const useMergeState = <User>(initialState = {username, password, email}) => {
    const [values, setValues] = useState(initialState);

    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };



    // onSubmit
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
 
    };


    // return values
    return { onChange,onSubmit,values }

}