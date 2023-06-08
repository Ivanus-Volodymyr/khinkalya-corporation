import React, {FC} from 'react';
import {useAppDispatch} from '../../hooks/redux';
import {useForm} from 'react-hook-form';
import {addLocality} from '../../store';
import {ILocality} from '../../interfaces';

const AddLocality: FC = () => {
    const dispatch = useAppDispatch();
    const {register, handleSubmit, reset} = useForm();
    const submit: any = async (data: ILocality) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        formData.append('name', data.name);
        await dispatch(addLocality(formData));
    };
    return (
        <div className="add-dish-container">
            <form className="add-dish-form" onSubmit={handleSubmit(submit)}>
                <div className="add-dish-container" style={{marginTop: 30}}>
                    <input className="add-dish-field-input" type="file" {...register('image')} />
                </div>
                <div className="add-dish-container" style={{marginTop: 30}}>
                    <input className="add-dish-field-input" type="text" placeholder={'name'} {...register('name')} />
                </div>
                <button style={{marginTop: 30}}>Додати цех</button>
            </form>
        </div>
    );
};

export {AddLocality};
