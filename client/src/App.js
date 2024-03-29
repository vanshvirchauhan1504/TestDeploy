import './App.css';
import axios from "axios";
import {useState} from 'react';


function App() {

  const [text,setText] = useState("Welcome To React");

  async function postData() {
    try {
      const postData = {
        data:"Received data from React App"
      };
      const response = await axios.post('https://test-deploy-psi-teal.vercel.app/', postData);
      setText(response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }  

  async function getData() {
    try {
      const response = await axios.get('https://test-deploy-psi-teal.vercel.app/test?name=Vansh');
      setText(response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }  

  return (
    <div className="App">
       <h1>
         {text}
       </h1>

       <button onClick={getData}>GET</button>

       <button onClick={postData}>POST</button>

    </div>
  );
}


export default App;
