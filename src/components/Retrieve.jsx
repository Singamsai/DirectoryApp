import {useState} from 'react';
import './retrieve.css'

export default function Retrieve() {
    const [search, setSearch] = useState('');
    const [user, setUser] = useState({});

    const handleData = () => {
        const data = JSON.parse(localStorage.getItem(search));
        console.log(data);
        setUser(data);
    }

  return (
      <div className='retrieve'>
          <p>Retrieve Information</p><br/><br/><br/><br/>
          <input type='number' placeholder='Enter your Aadhar' value={search} onChange={(e) => setSearch(e.target.value)} />
          <button onClick={handleData} className='retreiveButton'>find</button><br/><br/><br/>
          {
              user ? (
                  <div className='data'>
                      {
                         Object.keys(user).map(key=>(
                             <li>{key} : {user[key]}</li>
                         )) 
                      }
              </div>
              ):(<h1>No Data Found</h1>)
          }
    </div>
  )
}
