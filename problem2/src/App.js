import { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);
  const randomNumber = Math.floor(Math.random()*10)+1;
    
  const addUsers = async () =>{
    try {
      const url =  `https://swapi.dev/api/people/${randomNumber}`
      const response = await axios.get(url,{
        headers:{
          'Content-Type': 'Accept: application/json',
        }
      });
      setUsers(response?.data);
      const newApiResponse = {
        data: response.data
      }
      setApiResponse([...apiResponse, newApiResponse])
    } catch (error) {
      console.error('Error Fetching',error)
    }}

  useEffect(()=>{
      addUsers();
  },[]);

  const userDelete = (name) => {
    const updatedResponses = apiResponse.filter(response=> response.data.name !== name);
    setApiResponse(updatedResponses);
  }
    

  return (
   <>
    <h1>Random User Table</h1> 
    <button onClick={addUsers}>ADD USER</button>
    
      <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Gender</th>
            <th>Trash</th>
        </tr>
    </thead>
    <tbody>
      {apiResponse.map((data,index)=>(
        <tr key={index}>
          <td>{data?.data?.name}</td>
          <td>{data?.data.birth_year}</td>
          <td>{data?.data?.gender}</td>
          <td>
            <button onClick={()=>userDelete(data?.data?.name)}>Delete</button>
          </td>
        </tr>
      ))}
        
    </tbody>
    </table>
   </>
  );
}

export default App;
