import { useEffect, useRef } from "react";

const FollowButtonFuncUseRef = ({user}) => {

    const click = () => {
        setTimeout(() => {
            alert('Follow ' + user);
        }, 3000);
    }

    return (
        <button onClick={click}>Follow</button>
    );
};

export default FollowButtonFuncUseRef;