import React, {FC, useEffect} from 'react';
import './Header.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getLocality, logoutUser} from "../../store";
import {Link} from "react-router-dom";


const Header: FC = () => {
    const refresh = localStorage.getItem('refresh');
    const {locality} = useAppSelector(state => state.adminReducer);
    useEffect(() => {
            dispatch(getLocality())
        }
        , [refresh])
    const {isLog} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()
    const logout: any = async () => {
        dispatch(await logoutUser())
    }
    console.log({a:1}==={a:1})
    return (
        <div>

            <div className={'header_menu'}>
                <div>
                    <a href="/"> <img src="/image-for-header/logoKhinkalnya.jpg" width={'150px'} alt="logo"/></a>
                </div>
                {locality && locality.map(value => <div key={value.id}>
                    <Link to={"/dish/" + value.id.toString()}> <img src={value.image} width={'80px'} height={'40px'}
                                                                    alt="locality"/></Link>
                    <div>{value.name}</div>
                </div>)}
                <div>
                    <Link to={"/cart"}>
                    <img src="/image-for-header/cart.png" width={'80px'} height={'50px'} alt="cart"/>
                    </Link>
                </div>
                <div>
                    <div>{refresh ? <button onClick={logout}><a href="/auth/login">Вийти</a></button> :
                        <div><a href="/auth/login">Увійти</a></div>} </div>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default Header;