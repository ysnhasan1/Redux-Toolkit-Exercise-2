import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sumFunc } from "../redux/features/detailValue/detailValueSlice.js";
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';

function Home() {

    // console.log(useSelector(state => state)); // tüm state'lere erişir.
    const homeVal = (useSelector(state => state.homeValueReducer.value));
    const homeVal2 = (useSelector(state => state.homeValue2Reducer.value));

    const dispatch = useDispatch();

    return (
        <>
            Home Page.
            <div>
                <Link id="detail-page-link" to="/detail">Detaylara Git!</Link>
            </div>

            <div className="flex-container">
                <AiFillMinusCircle className="react-icon" onClick={() => dispatch(sumFunc(-homeVal))} />

                <p className="homeValues">{homeVal}</p>

                <AiFillPlusCircle className="react-icon" onClick={() => dispatch(sumFunc(homeVal))} />
            </div>

            <div className="flex-container">
                <AiFillMinusCircle className="react-icon" onClick={() => dispatch(sumFunc(-homeVal2))} />

                <p className="homeValues">{homeVal2}</p>

                <AiFillPlusCircle className="react-icon" onClick={() => dispatch(sumFunc(homeVal2))} />
            </div>
        </>
    )
};

export default Home;