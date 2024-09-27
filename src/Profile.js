import React, { useState } from 'react';

function increaseAge(setAge, age) {
    setAge(age + 1);
}

function changeName(setName, names) {
    const index = Math.floor(Math.random() * names.length);
    console.log(index)
    setName(names[index]);
}

const Profile = () => {
    // Declaring multiple states using useState hook
    const [name, setName] = useState('John Doe');
    const [age, setAge] = useState(0);
    const names = ['Franco', 'Gian', 'Franco Gian', 'Franco Gian de Castro'];

    return (
        <div>
            <h1>Profile Information</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button className='btn btn-primary' onClick={() => increaseAge(setAge, age)}>Increase Age</button>
            <br /><br />
            <button className='btn btn-primary' onClick={() => changeName(setName, names)}>Change Name</button>
        </div>
    );
}

export default Profile;

/*
function increaseAge(setAge, age) {
    setAge(age + 1);
}

function changeName(setName, names) {
    const index = Math.floor(Math.random() * names.length);
    console.log(index)
    setName(names[index]);
}*/