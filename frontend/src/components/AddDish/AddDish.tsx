import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { addDish, getLocality, getRestaurants } from "../../store";
import { IDish } from "../../interfaces";
import "./AddDish.css";
import {  TextField } from "@mui/material";
import Upload from "antd/es/upload/Upload";
import { Button } from "antd";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";


const AddDish: FC = () => {
  const { locality, restaurant } = useAppSelector(state => state.adminReducer);
  const { register, handleSubmit, reset } = useForm();


  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLocality());
    dispatch(getRestaurants());
  }, []);


  const submit: any = async (data: IDish) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("name", data.name);
    formData.append("price", data.price.toString());
    formData.append("weight", data.weight.toString());
    formData.append("description", data.description);
    formData.append("localityId", data.localityId);
    formData.append("restaurantId", data.restaurantId);
    await dispatch(addDish(formData));
  };

  return (
    <div>
      <div>
        <form style={{display:'flex',flexDirection:'column',alignItems:"center",justifyContent:'center',margin: "10px"}} onSubmit={handleSubmit(submit)}>
          <h3>Добавити Страву</h3>
          <div style={{display:'flex',flexDirection:'column',alignItems:"center",justifyContent:'center'}}>
            <div>
              <div  id="image">Фото Страви</div>
              <input  style={{ margin: "10px" }} className={"file"} type="file" {...register("image")} />
            </div>
            <div><input  style={{ margin: "10px" }} type="text" placeholder={"name"}{...register("name")} /></div>
            <div><input  style={{ margin: "10px" }} type="number" placeholder={"price"}{...register("price")} /></div>
            <div><input  style={{ margin: "10px" }} type="number" placeholder={"weight"}{...register("weight")} /></div>
            <div>
              <TextField
                style={{ margin: "10px" }}
                id="outlined-multiline-static"
                label="Текст Опису"
                multiline
                rows={4}
                {...register("description")}
              />
            </div>
            <select  style={{ margin: "10px" }} {...register("localityId")}  >
              <option value="">Виберіть цех приготування</option>
              {locality && locality.map(result =>
                <option key={result.id} value={result.id}>{result.name}</option>)}
            </select>

            <select  style={{ margin: "10px" }} {...register("restaurantId")}  >
              <option value="">Виберіть ресторан</option>
              {restaurant && restaurant.map(result =>
                <option key={result.id} value={result.id}>{result.name}</option>)}
            </select>
            <div>
              <button>Добавити Страву</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { AddDish };
