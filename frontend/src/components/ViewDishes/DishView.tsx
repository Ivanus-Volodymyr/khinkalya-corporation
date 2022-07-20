import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getAllDishByLocalityId} from "../../store/slices/dish.slice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Dishes from "../Dishes/Dishes";

const DishView: FC = () => {
    const {result, status} = useAppSelector(state => state.dishReducer);
    const {id} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getAllDishByLocalityId(id))
        }
    }, [id])
    console.log(status);
    return (
        <div style={{display: 'flex'}}>
            {status === 'Loading' && <h1>Loading...</h1>}
            {result && status === 'fulfilled' &&
                result.map(results => <Dishes key={results.id} results={results}/>)}
        </div>
    );
};

export default DishView;