import {useEffect, useRef, useState} from 'react';

const Input = () => {
    const [message, setMessage] = useState('');
    const ref = useRef('');

    
    useEffect(() => {
        // 每次 render 都取得最新的資料
        ref.current = message;
    });

    const atChange = (e) => {
        setMessage(e.target.value);
    }
    const atClick = () => {
        setTimeout(() => {
            alert(ref.current);
        }, 3000);
    }
    return (
        <>
            <input onChange={atChange} value={message}/>
            <button onClick={atClick}>send</button>
        </>
    );
};

export default Input;