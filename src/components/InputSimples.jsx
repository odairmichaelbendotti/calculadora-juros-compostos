import React from 'react';

const InputSimples = ({ id, title, symbol, state, change }) => {

    function changeFunction(e) {
        state(e.target.value)
        change(false)
    }

    return (
        <div>
            <label htmlFor={id} className='text-sm'>{title}</label>
            <div
                className='w-full h-10 flex rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md'>
                {symbol !== "" &&
                    <label
                        className='w-20 h-full bg-backgorund-texts flex justify-center items-center rounded-tl-md rounded-bl-md border-1 border-gray-300'
                        htmlFor={id}>{symbol}
                    </label>}
                <input
                    type="text"
                    className={`w-full h-full border-1 rounded-tr-md rounded-br-md outline-none text-right pr-4 placeholder-gray-300 border-gray-300 bg-white text-gray-500 ${symbol === "" ? 'rounded-tl-md rounded-bl-md' : 'border-l-0'}`}
                    id={id}
                    placeholder='0,00'
                    onChange={changeFunction}
                />
            </div>
        </div>
    );
};

export default InputSimples;