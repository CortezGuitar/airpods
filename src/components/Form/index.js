import React, { useState } from 'react';
import { Button } from '../General';
import styled from 'styled-components/macro';
import InputMask from 'react-input-mask';

const Form = styled.form`
    width: 100%;
    text-align: left;
`;

const FormLabel = styled.label`
    margin: 1rem 0;
    display: block;
    opacity: 0.9;
    font-size: 1.1rem;
`;

const FormInput = styled.input`
    display: block;
    width: 100%;
    height: 2.5rem;
    border-radius: 6px;
    margin-top: 0.5rem;
    border: 1px solid grey;
    box-shadow: inset 0 0 1px;
    font-size: 1rem;
    padding: 1rem;
    :focus {
        border: 2px solid grey;
        outline: 0;
    }
`;

const FormSubmit = styled(Button)`
    width: 100%;
`;

function OrderForm({ hideOverlay }) {
    const [values, setValues] = useState({ name: '', phone: '' });

    const handleChange = (e) => {
        const name = e.target.name;
        setValues({
            ...values,
            [name]: e.target.value,
        });
    };

    const token = '1161986942:AAHToGYHNGcXZSb-QeSHql6YGuaWJokDEVc';
    const channel = '545174508';

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({ name: '', phone: '' });
        fetch(
            `https://api.telegram.org/bot${token}/sendMessage?chat_id=${channel}&text=${
                values.name + ' / ' + values.phone
            }`,
            { method: 'GET' }
        )
            .then((res) => res.json())
            .then(() => hideOverlay())
            .catch(() => hideOverlay());
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormLabel>
                Ваше имя:
                <FormInput
                    name={'name'}
                    type={'text'}
                    value={values.name}
                    onChange={handleChange}
                    minLength={'3'}
                    required
                />
            </FormLabel>
            <FormLabel>
                Ваш номер:
                <InputMask
                    mask="+3\8 999 999 99 99"
                    value={values.phone}
                    onChange={handleChange}
                >
                    {() => <FormInput name={'phone'} type={'tel'} required />}
                </InputMask>
            </FormLabel>
            <FormSubmit type={'submit'}>Отправить</FormSubmit>
        </Form>
    );
}

export default OrderForm;
