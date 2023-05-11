import React from "react";
import {AiOutlineEdit} from 'react-icons/ai'
import {TiTickOutline} from 'react-icons/ti'
import {RiDeleteBin5Line} from 'react-icons/ri'

import classes from "./ListItem.module.scss";
import AppButton from "../../UI/AppButton/AppButton";
import {palette} from "../../constants";
import {useAppDispatch} from "../../redux";
import {removeListItem, toggleComplete} from "../../redux/reducers/root-reducer";


export interface IListItemProps {
    id: string
    message: string,
    completed: boolean,
    onEdit: (id: string, message: string) => void;
}

const ListItem = ({message, completed, id, onEdit}: IListItemProps) => {
    const dispatch = useAppDispatch()

    function onCompleteHandler() {
        dispatch(toggleComplete(id))
    }

    function onDeletedHandler() {
        dispatch(removeListItem(id))
    }

    return (
        <div className={classes.item}>
            <p>{message}</p>
            <AppButton onClick={onCompleteHandler}><TiTickOutline
                fill={completed ? palette.green : 'white'}/></AppButton>
            <AppButton onClick={onDeletedHandler}><RiDeleteBin5Line/></AppButton>
            <AppButton onClick={() => onEdit(id, message)}><AiOutlineEdit/></AppButton>
        </div>
    )
}

export default ListItem
