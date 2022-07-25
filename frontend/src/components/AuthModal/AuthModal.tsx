import { FC } from "react";
import * as React from "react";

import "./AuthModal.css";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import { setModalActive } from '../../store/slices';

type Props = {
    children?: React.ReactNode
};

const ModalWindow: FC<Props>= ( {children}) => {
    const dispatch = useAppDispatch();
    // const { isRegisterActive, isLoginActive} = useAppSelector((state) => state.userReducer);

    return (
        <div> Modal</div>
        //     // className={ isLoginActive || isRegisterActive ? "modal active" : "modal"}
        //     onClick={() => {
        //         dispatch(setModalActive());
        //     }}
        // >
        //     <div
        //         className={isLoginActive || isRegisterActive ? "modal-content active" : "modal-content"}
        //         onClick={(event) => event.stopPropagation()}
        //     >
        //         {children}
        //     </div>
    );
};

export { ModalWindow };
