import Header from "./Header";

const name = 'PASV';
const age = 123;
const contacts = [
    {id: 1, name: 'Katya'},
    {id: 2, name: 'Lena'},
    {id: 3, name: 'Galya'}
];

function App() {

    const appAlarm = (num) => {
        console.log('---App Alarm---')
        console.log(num);
    }

    return (
        <div>
            <Header
                name={name}
                age={age}
                contacts={contacts}
                appAlarm={appAlarm}
            />
        </div>
    );
}

export default App;

// chtobi peredat danniye naverh,
// nado zapustit func roditelskogo
// componenta i peredat tuda danniye