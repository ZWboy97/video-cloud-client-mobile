import React from 'react';
export function getCurrentDate(separator = '-', sep = ':') {

    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();

    return `${year}${separator}
            ${month < 10 ? `0${month}` : `${month}`}
            ${separator}
            ${date}
            ${separator}
            ${hour}
            ${sep}
            ${minutes}`
}