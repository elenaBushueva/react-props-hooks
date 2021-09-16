import React from 'react';
import Controls from "./Controls";


const Header = ({name, age, contacts, appAlarm}) => {

    const headerAlarm = (num) => {
        console.log('---Header Alarm---');
        console.log(num);
        appAlarm(num);
    }

    return (
        <div>
            {name} {age}
            <ul>
                {contacts.map(el => <li key={el.id}>{el.name}</li>)}
            </ul>
            <Controls
                headerAlarm={headerAlarm}
            />
        </div>
    );
};

export default Header;