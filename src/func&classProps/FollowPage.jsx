import {useState, useRef} from 'react';
import FollowButtonClass from './FollowButtonClass';
import FollowButtonFunc from './FollowButtonFunc';
import FollowButtonFuncUseRef from './FollowButtonFuncUseRef';
const FollowPage = () => {
    const [name, setName] = useState('David');
    const ref = useRef('');
    const atChangeOption = (e) => {
        setName(e.target.value);
        ref.current = e.target.value;
    }
    return (
        <div>
            Choose person:  
            <select
                value={name}
                onChange={atChangeOption}
            >
                <option>David</option>
                <option>Jack</option>
                <option>Sonia</option>
            </select>
            <h1>Welcome to {name}'s profile</h1>
            <div>
                <FollowButtonClass user={name} />
                <b>class</b>
            </div>
            <div>
                <FollowButtonFunc user={name} />
                <b>function</b>
            </div>
            <div>
                <FollowButtonFuncUseRef user={ref.current} />
                <b>function (useRef)</b>
            </div>
        </div>
    );
}

export default FollowPage;