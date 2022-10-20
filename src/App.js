import './App.css';
import FormWrapper from './Components/FormWrapper';
import Navbar from './Components/Navbar';
import Wrapper from './Components/Wrapper';
import {useState} from 'react'



function App() {

  const [user, setUser] = useState('')



  return (
    <div className="App">
      <Wrapper>
        <Navbar/>
        <FormWrapper/>
      </Wrapper>
    </div>
  );
}

export default App;
