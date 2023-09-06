import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [members, setMember] = useState([]);
  const [refresh, getRefresh] = useState(false);

  useEffect(() => {
    const getUser = async() => {
      try {
        const respones = await axios.get('https://jsd5-mock-backend.onrender.com/members');
      setMember(respones.data);
    } catch (error) {
      console.error(error);
    }
  };

    getUser();
  },[refresh]);

  const createNewUser = async(name, age, weight, status) => {
      try {
        const newUser = {
        name: name,
        age: age,
        weight: weight,
        status: status,
      }
      const response = await axios.post(`https://jsd5-mock-backend.onrender.com/members`, newUser);
      getRefresh(!refresh);
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className='bg-black text-white p-5 flex flex-row flex-wrap'>
      <CreateUser createNewUser={createNewUser} />
      {members.map((member) => (
        <Card key={member.id} name={member.name} age={member.age} weight={member.weight} status={member.status}/>
      ))}
    </div>
  )
}

function Card({ name, age, weight, status }) {
  return (
    <div className='container bg-neutral-600 p-5 w-52 rounded-xl m-5'>
      <h1 className='text-xl mt-4'>Name: {name}</h1>
      <h1 className='text-xl mt-4'>Age: {age}</h1>
      <h1 className='text-xl mt-4'>Weight: {weight}</h1>
      <h1 className='text-xl mt-4'>Status: {status}</h1>
    </div>
  );
}

function CreateUser({ createNewUser }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    createNewUser(name, age, weight, status);
    // Reset input fields
    setName('');
    setAge('');
    setWeight('');
    setStatus('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name: </label>
        <input className='bg-gray-500 py-2 me-3 rounded-xl px-2' type="text" name="user-name" id="username" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="userage">Age: </label>
        <input className='bg-gray-500 py-2 me-3 rounded-xl px-2' type="number" name="user-age" id="userage" value={age} onChange={(e) => setAge(e.target.value)} />
        <label htmlFor="userweight">Weight: </label>
        <input className='bg-gray-500 py-2 me-3 rounded-xl px-2' type="number" name="user-weight" id="userweight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <label htmlFor="userstatus">Status: </label>
        <input className='bg-gray-500 py-2 me-3 rounded-xl px-2' type="text" name="user-status" id="userstatus" value={status} onChange={(e) => setStatus(e.target.value)} />
        <button className='bg-sky-500 p-3 rounded-xl' type="submit">Create User</button>
      </form>
    </div>
  )
}

export default App
