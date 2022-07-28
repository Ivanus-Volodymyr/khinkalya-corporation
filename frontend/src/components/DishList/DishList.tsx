import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getAllDishByLocalityId} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Dish} from "../Dish/Dish";

const DishList: FC = () => {
    const {result, status} = useAppSelector(state => state.dishReducer);
    const {id} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getAllDishByLocalityId(id))
        }
    }, [id,dispatch])

    return (
        <div style={{display: 'flex'}}>
            {status === 'Loading' && <h1>Loading...</h1>}
            {result && status === 'fulfilled' &&
                result.map(results => <Dish key={results.id} results={results}/>)}
        </div>
    );
};

export {DishList};
