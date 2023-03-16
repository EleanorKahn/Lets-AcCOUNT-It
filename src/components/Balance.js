import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    // creating a new array of amounts below
    const amount = transactions.map(transaction => transaction.amount);
    console.log(amount);
    const total = amount.reduce((acc, item) => acc += item, 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </>
    );
};

export default Balance;