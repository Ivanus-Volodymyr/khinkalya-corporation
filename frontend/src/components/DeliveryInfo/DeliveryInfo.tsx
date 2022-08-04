import React, { FC } from "react";
import {WalletOutlined, CarOutlined } from "@ant-design/icons";

import "./DeliveryInfo.css";

const DeliveryInfo:FC = () => {
  return (
    <section className={"delivery-main-container"}>
    <div>
      <div className={"delivery-container"}>
        <div className={"delivery-container-item-columns"}>
          <div className={"delivery-container-item-block"}>
            <div className={"delivery-container-item-block_item"}>
              <div>
                <CarOutlined />
                Адресна доставка
              </div>
              <p>Вартість доставки залежіть від відстані:</p>
              <div className={"delivery-destination"}>
                <div className={"delivery-destination-item small"}>
                  до 3 км -----&gt;
                </div>
                <div>
                  49 грн.
                </div>
              </div>
              <div className={"delivery-destination"}>
                <div className={"delivery-destination-item big"}>
                  3+ км ---------&gt;
                </div>
                <div>
                  80 грн.
                </div>
              </div>
            </div>
            <div className={"delivery-container-item-block_item"}>
              <p>Доставка Glovo</p>
              <p>Від 49 грн,</p>
              <p>До 10 кг,</p>
              <p>З 9:00 до 21:00 (може змінюватись залежно від встановленої комендантської години в регіонах)
                Для того, щоб доставка була здійснена в останній слот доби 19:00-21:00, оплата повина бути здійснена до 18:00.</p>
            </div>
          </div>

          <div className={"delivery-container-item-block"}>

          </div>

        </div>
        <div className={"delivery-container-item"}>
          <div>
            <WalletOutlined />
            Оплата
          </div>
          <div className="payment">
            <img  src="/image-for-header/visa.svg" alt="visa" width={'50px'} height={'30px'}/>
            <img src="/image-for-header/mastercard.svg" alt="mastercard" width={'50px'} height={'30px'}/>
          </div>
          <p>Після оплати ми вам зателефонуємо для підтвердження замовлення</p>
          <div>
            <img src="/image-for-footer/payment.png" alt="payment" width={'80px'} height={'60px'}/>
          </div>
        </div>
      </div>

    </div>
      <div className={"delivery-container-item"}></div>
      <div className={"delivery-container-item"}></div>
    </section>
  );
};

export {DeliveryInfo} ;
