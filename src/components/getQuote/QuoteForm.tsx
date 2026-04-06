"use client";

import { useEffect, useState } from 'react'
import Input from '../Input';
import SweetAlert from '../SweetAlert';
import { useRouter } from 'next/router';

type InputType = {
    name: string;
    companyName: string;
    email: string;
    phone: string | number;
    message?: string;
}
type quoteT = {
    initialState: {
        name: string;
        companyName: string;
        email: string;
        phone: string;
        message?: string;
    }
}

const QuoteForm = ({ initialState }: quoteT) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const submitForm = async () => {
        const res = await fetch('/api/postQuote', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...inputValue }),
        });
        if (res.ok) {
            setInputValue(initialState);
            SweetAlert();
            
        } else {
            console.error('there was an error with the request');
        }
        setIsDisabled(true);

    }

    const [inputValue, setInputValue] = useState<InputType>(initialState);

    const activateBtn = () => {
        //condition for activating btn
        const valueCheck = Object.values(inputValue).filter((_, inx) => inx !== 4).every((each) => each !== "");
        if (valueCheck) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }

    useEffect(() => { activateBtn() }, [inputValue, activateBtn]);

    return (
        <form action="form" className="mt-lg-5" onSubmit={(e) => {
            e.preventDefault();
            submitForm();
        }}>
            <Input change={(value) => setInputValue((prev) => ({ ...prev, name: value }),)} inputValue={inputValue.name} placeholder="Name" type="string" key={1} required />
            <Input change={(value) => setInputValue((prev) => ({ ...prev, companyName: value }),)} inputValue={inputValue.companyName} placeholder="Company Name" type="string" key={2} required />
            <Input change={(value) => setInputValue((prev) => ({ ...prev, email: value }),)} inputValue={inputValue.email} placeholder="Email" type="email" key={3} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$" required />
            <Input change={(value) => setInputValue((prev) => ({ ...prev, phone: value }),)} inputValue={inputValue.phone} placeholder="0-704-222-4444" type="tel" pattern="[0]{1}[0-9]{3}[0-9]{3}[0-9]{4}" key={4} required />
            <textarea onChange={(e) => setInputValue((prev) => ({ ...prev, message: e.target?.value }))} placeholder="Your Message (Challenge/Objective)" className="bg-white border border-primary w-100 p-3 my-3 text-black" value={inputValue.message} rows={5}></textarea>
            <button className="btn btn-primary rounded p-4 text-capitalized" disabled={isDisabled}>Get a Quote</button>
            <p className="mt-5 text-danger">***Start with our mandatory Avata session, where we diagnose, prioritise, and recommend the growth plan that fits your brand. This saves time and prevents wasted spend.***</p>
        </form>
    )
}

export default QuoteForm