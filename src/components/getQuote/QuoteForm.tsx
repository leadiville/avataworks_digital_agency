"use client";

import React, { useState } from 'react'
import Input from '../Input';

type InputType = {
    name: string;
    companyName: string;
    email: string;
    phone: string | number;
    message: string;
}
type quoteT = {
    initialState: {
        name: string;
        companyName: string;
        email: string;
        phone: string;
        message: string;
    }
}
const QuoteForm = ({ initialState }: quoteT) => {

    const submitForm = async () => {
        const res = await fetch('/api/postQuote', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...inputValue }),
        });
        console.log(res);
        if (res.ok) {
            setInputValue(initialState);
            console.log('post made successfully')
        } else {
            console.error('there was an error with the request');
        }

    }

    const [inputValue, setInputValue] = useState<InputType>(initialState);

    return (
        <form action="form" className="mt-5" onSubmit={(e) => {
            e.preventDefault();
            submitForm();
        }}>
            <Input change={(value) => setInputValue((prev) => ({ ...prev, name: value }),)} inputValue={inputValue.name} placeholder="Name" type="string" key={1} />
            <Input change={(value) => setInputValue((prev) => ({ ...prev, companyName: value }),)} inputValue={inputValue.companyName} placeholder="Company Name" type="string" key={2} />
            <Input change={(value) => setInputValue((prev) => ({ ...prev, email: value }),)} inputValue={inputValue.email} placeholder="Email" type="string" key={3} />
            <Input change={(value) => setInputValue((prev) => ({ ...prev, phone: value }),)} inputValue={inputValue.phone} placeholder="Phone" type="string" key={4} />
            <textarea onChange={(e) => setInputValue((prev) => ({ ...prev, message: e.target?.value }))} placeholder="Your Message (Challenge/Objective)" className="bg-white border border-primary w-100 p-3 my-3 text-black" value={inputValue.message} rows={5}></textarea>
            <button className="btn-primary bg-white border-2 border-primary p-3 px-5" type="submit">Submit</button>
            <p className="mt-5 text-danger">***Start with our mandatory Avata session, where we diagnose, prioritise, and recommend the growth plan that fits your brand. This saves time and prevents wasted spend.***</p>
        </form>
    )
}

export default QuoteForm