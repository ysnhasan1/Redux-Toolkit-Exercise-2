import React from "react";
import { useSelector } from 'react-redux';

function Detail() {

    // console.log(useSelector(state => state)); // tüm state'lere erişir.

    const detailVal = useSelector(state => state.detailValueReducer.value);
    // console.log(detailVal); // returns an array

    // dizinin elemanlarını toplamak için
    let sum = detailVal.reduce(function (a, b) {
        return a + b;
    });

    // console.log(sum); // detail sayfasında gösterilecek olan toplam

    return (
        <>
            Detail Page.
            <div>{sum}</div>
        </>
    )
};

export default Detail;