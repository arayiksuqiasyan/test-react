import React from "react";

import classes from './List.module.scss'
import ListItem from "../ListItem/ListItem";
import {ITodo} from "../models/todo";

interface IListProps {
    list: ITodo[],
    onEdit: (id: string, message: string) => void;
}

const List = ({list, onEdit}: IListProps) => {
    return (
        <div className={classes.list}>
            {
                list.map((todo) => {
                    return (
                        <ListItem key={todo.id}
                                  message={todo.message}
                                  completed={todo.completed}
                                  id={todo.id}
                                  onEdit={onEdit}
                        />
                    )
                })
            }
        </div>
    )
}

export default List
