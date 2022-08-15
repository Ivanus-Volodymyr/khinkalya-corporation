import React, { FC, useEffect } from "react";
import "./Main.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getPromotions } from "../../store";
import { Carousel } from "antd";
import { PromotionItem } from "../PromotionItem/PromotionItem";

const Main: FC = () => {
  const { promotion } = useAppSelector(state => state.promotionsReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPromotions());
  }, [dispatch]);
  return (
    <div>
      <div>
        <video style={{ margin: 0, height: "initial" }}
               width={"100%"}
               autoPlay
               muted
               className="video"
               src={
                 "/video/video.mp4"
               }
        />

        <div className="container_button_main">
          <a href="#" className="btn_main">Замовити</a>
        </div>
      </div>

      <div>
        <Carousel
          autoplay={true}
          arrows={true}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          {promotion.map((value) => (
            <div>
              <div style={{display:'flex',alignItems:"center",justifyContent:"space-evenly",padding:'10px'}}>
                <img width={"300px"} height={"300px"} src={value.image} alt="" />
                <div>{value.descriptions}</div>
              </div>
            </div>
            // <PromotionItem key={value.id} promotion={value} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export { Main };
