import React, { FC } from "react";
import { WalletOutlined, CarOutlined, HomeOutlined } from "@ant-design/icons";

import "./DeliveryInfo.css";

const DeliveryInfo:FC = () => {
  return (
    <section className={"delivery-main-container"}>
      <div className={"delivery-container"}>

        <div className={"delivery-container-block-address"}>
          <div className={"delivery-container-block-address-item"}>
            <div>
              <CarOutlined />
              <span>Адресна доставка</span>
            </div>
            <p>Вартість доставки залежіть від відстані:</p>
            <div className={"delivery-destination"}>
              <div className={"delivery-destination-item"}>
                до 3 км -----&gt;
              </div>
              <div>
                49 грн.
              </div>
            </div>
            <div className={"delivery-destination"}>
              <div className={"delivery-destination-item"}>
                3+ км -----------&gt;
              </div>
              <div>
                80 грн.
              </div>
            </div>
            <div>
              <HomeOutlined />
              <span className={'delivery-info'}>Самовивіз із ресторану</span>
            </div>
          </div>

          <div className={"delivery-container-block-address-item"}>
            <p>
              <img src="/image-for-footer/glovo.png" alt="glovo" width={'50px'} height={'30px'}/>
              Доставка Glovo
            </p>
                    <p>Від 49 грн,</p>
                    <p>До 10 кг,</p>
                   <p>З 9:00 до 21:00 (може змінюватись залежно від встановленої комендантської години в регіонах)
                      Для того, щоб доставка була здійснена в останній слот доби 19:00-21:00, оплата повина бути здійснена до 18:00.</p>
            <p className={'delivery-info'}>Приготування замовлення</p>
            <p>Оплата</p>
            <p>З урахуванням місцевої комендантьскої години</p>
          </div>
        </div>

        <div className={"delivery-container-block"}>
          <div className={"delivery-container-block-item"}>
            <div>
              <WalletOutlined />
              <span>Оплата</span>
            </div>
            <div className="payment">
              <img src="/image-for-footer/visa.svg" alt="visa" width={'50px'} height={'30px'}/>
              <img src="/image-for-footer/mastercard.svg" alt="mastercard" width={'50px'} height={'30px'}/>
            </div>
            <p>Після оплати ми вам зателефонуємо для підтвердження замовлення</p>
            <div>
              <img src="/image-for-footer/payment.png" alt="payment" width={'80px'} height={'60px'}/>
            </div>
          </div>
        </div>

      </div>
      <div className={"delivery-container"}></div>
      <div className={"delivery-container"}></div>
    </section>
  );
};

export {DeliveryInfo} ;

// <div>
//   <div className={"delivery-container"}>
//     <div className={"delivery-container-item-columns"}>
//       <div className={"delivery-container-item-block"}>
//         <div className={"delivery-container-item-block_item"}>

//         </div>
//         <div className={"delivery-container-item-block_item"}>
//           <p>Доставка Glovo</p>
//           <p>Від 49 грн,</p>
//           <p>До 10 кг,</p>
//           <p>З 9:00 до 21:00 (може змінюватись залежно від встановленої комендантської години в регіонах)
//             Для того, щоб доставка була здійснена в останній слот доби 19:00-21:00, оплата повина бути здійснена до 18:00.</p>
//         </div>
//       </div>
//
//       <div className={"delivery-container-item-block"}>
//
//       </div>
//
//     </div>

//   </div>
//
// </div>
// <div className={"delivery-container-item"}></div>
// <div className={"delivery-container-item"}></div>
