import React from 'react';
import Majax from 'react-mathjax';

export const setRes = (res, fixed) => isNaN(res) ? "0" : res.toFixed(fixed);
export const changeValue = (event) => isNaN(parseFloat(event.target.value)) ? 0 : parseFloat(event.target.value);
export const setErrorValue = (...values) => {
    values.forEach(x => x = 0);
}
export const containsErrorValue = (...values) => {
    let containsError = false;
    values.forEach(x => {
        if (!isFinite(x)){
            containsError = true;
        }
    })

    return containsError;
}

export const mathjaxNode = (formula) => {
    return <Majax.Node inline formula={formula} />
}