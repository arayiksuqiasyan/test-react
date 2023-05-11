import React, {useState} from "react";
import classes from './Todo.module.scss'
import {palette} from "../../constants";
import {useForm} from "react-hook-form";

import {TiTickOutline} from 'react-icons/ti'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {AiOutlineEdit} from 'react-icons/ai'
import AppButton from "../../UI/AppButton/AppButton";

const Todo = () => {
    const [list, setList] = useState([])
    const {register, handleSubmit} = useForm();

    const onSubmitHandler = (data: any) => {
        const {todo} = data
        const myTodo = {completed: false, message: todo}
        // @ts-ignore
        setList([...list, myTodo])

    };


    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input {...register("todo")} />
                <input {...register("search")} />

                <input type="submit"/>
            </form>

            <div>
                {
                    list.map((el, i) => {
                        return (
                            <div key={el} className={classes.list}>
                                {/*// @ts-ignore*/}
                                <span>{el.message}</span>
                            </div>
                        )
                    })
                }
            </div>

            {/*<RiDeleteBin5Line/>*/}
            {/*<TiTickOutline fill={palette.green}/>*/}
            {/*<AiOutlineEdit/>*/}
        </div>
    )
}

export default Todo
