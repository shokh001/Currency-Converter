import React, { useState } from "react";
import converte from '../../assets/images/currency-exchange.png'
import './style.scss'

const CurrencyConverte = () => {
    const [date] = useState(new Date());
    const [inputValue, setInputValue] = useState(0);
    const [selectValue, setSelectValue] = useState('USD');
    const [result, setResult] = useState(10625);

    const inputChange = (e) => {
        setInputValue(e.target.value)
        amountChange(e.target.value, selectValue)        
    }
    
    const selectChange = (e) => {
        amountChange(inputValue, e.target.value)
        setSelectValue(e.target.value);
    }
    
    const amountChange = (input, select) => {
        switch (select) {
            case 'USD': return setResult((input * 10625).toFixed(2))
            case 'EUR': return setResult((input * 12616.13).toFixed(2))
            case 'RUB': return setResult((input * 145.21).toFixed(2))
            case 'GBP': return setResult((input * 14822.94).toFixed(2))
            case 'CHF': return setResult((input * 11693.81).toFixed(2))
            case 'JPY': return setResult((input * 96.73).toFixed(2))
            case 'KZT': return setResult((input * 24.97).toFixed(2))
            case 'AUD': return setResult((input * 7865.69).toFixed(2))

            default: return setResult((input * 10625).toFixed(2))
        }
    }

    return (
        <div className='converte'>
            <div className="container">
                <div className="hero">
                    <p>Shokh Live <br /> Currency Converter </p>
                    <div className="date">
                        {date.toDateString()}
                    </div>
                </div>

                <div className="currency_converte">
                    <div className="top">
                        <p>Currency <br /> converter</p>
                        <img src={converte} alt="" />
                    </div>

                    <div className="forms">
                        <div className="action">
                            <input onChange={inputChange} type="number" placeholder='1' />
                            <select onChange={selectChange}>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="RUB">RUB</option>
                                <option value="GBP">GBP</option>
                                <option value="CHF">CHF</option>
                                <option value="JPY">JPY</option>
                                <option value="KZT">KZT</option>
                                <option value="AUD">AUD</option>
                            </select>
                        </div>

                        <div className="result">
                            <span>{result}</span>
                            <span>UZS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrencyConverte;