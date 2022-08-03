import { FC } from "react";
import * as React from "react";

import './FooterModal.css';

type Props = {
  children?: React.ReactNode;
};


const FooterModal: FC<Props> = ({children}) => {
  return  (
  <div
    className={'footer-modal'}
    onClick={() => {console.log('click')}}
  >
    <div
      className={'footer-modal-content'}
      onClick={(event) => event.stopPropagation()}
    >
      {children}
    </div>
  </div>
  )
}

export {FooterModal}
