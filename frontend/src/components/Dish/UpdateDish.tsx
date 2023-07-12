import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getDishById} from "../../store";
import {useParams} from "react-router-dom";
import Loader from "../Loader/Loader";

interface Styles {
    container: React.CSSProperties;
    form: React.CSSProperties;
    inputGroup: React.CSSProperties;
    label: React.CSSProperties;
    input: React.CSSProperties;
    fileInput: React.CSSProperties;
    imagePreview: React.CSSProperties;
    buttonGroup: React.CSSProperties;
    submitButton: React.CSSProperties;
    cancelButton: React.CSSProperties;
}

const UpdateDish: FC = () => {

    const dispatch = useAppDispatch();
    const {id} = useParams<{ id: string }>();

    const {popularDish, loading} = useAppSelector((state) => state.dishReducer);

    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState<File | null>(null);

    useEffect(() => {
        if (popularDish) {
            setName(popularDish.name);
            setWeight(popularDish.weight.toString());
            setPrice(popularDish.price.toString());
        }
    }, [popularDish]);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('weight', weight);
        formData.append('price', price);
        if (image) {
            formData.append('image', image);
        }
        // dispatch(updateDishById(+id, formData));
    };
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setImage(files[0]);
        }
    };

    useEffect(() => {
        if (id) {
            dispatch(getDishById(+id));
        }
    }, [dispatch, id]);

    return (
        <div style={styles.container}>
            {loading && !popularDish ? (
                <Loader/>
            ) : (
                <form style={styles.form} onSubmit={onSubmit}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="name">
                            Name:
                        </label>
                        <input
                            style={styles.input}
                            id="name"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="weight">
                            Weight:
                        </label>
                        <input
                            style={styles.input}
                            id="weight"
                            type="number"
                            value={weight}
                            onChange={(event) => setWeight(event.target.value)}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="price">
                            Price:
                        </label>
                        <input
                            style={styles.input}
                            id="price"
                            type="number"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="image">
                            Image:
                        </label>
                        <input
                            style={styles.fileInput}
                            id="image"
                            type="file"
                            onChange={handleImageChange}
                        />
                        {image && (
                            <img
                                style={styles.imagePreview}
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                            />
                        )}
                    </div>
                    <div style={styles.buttonGroup}>
                        <button style={styles.submitButton} type="submit">
                            Update
                        </button>
                        <button style={styles.cancelButton} type="button">
                            Cancel
                        </button>
                    </div>
                </form>)}
        </div>
    );
};

const styles: Styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '20px',
        width: '100%',
    },
    label: {
        marginBottom: '10px',
        fontWeight: 'bold',
        fontSize: '18px',
    },
    input: {
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        width: '100%',
        fontSize: '16px',
        marginBottom: '10px',
    },
    fileInput: {
        display: 'none',
    },
    imagePreview: {
        marginBottom: '20px',
        maxWidth: '100%',
        height: 'auto',
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '20px',
    },
    submitButton: {
        backgroundColor: '#c5161b',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        fontSize: '18px',
        cursor: 'pointer',
    },
    cancelButton: {
        backgroundColor: '#ddd',
        color: '#333',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        fontSize: '18px',
        cursor: 'pointer',
    },
};


export {UpdateDish};
