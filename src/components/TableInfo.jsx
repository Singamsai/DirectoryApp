import React, { useState } from "react";
import './tableInfo.css'

function TableInfo() {
  const [userdata, setUserdata] = useState([
    {
      name: "",
      dob: "",
      Uid: "",
      Mno: "",
      age: "",
    },
  ]);

  function inputChange(e,index){
    const {name, value} = e.target;
    
    const updateRow = [...userdata]
    updateRow[index][name]=value;

    setUserdata(updateRow)
  }
  function submit(e,index){
    e.preventDefault()
    const currentrow = userdata[index]
    localStorage.setItem(currentrow.Uid, JSON.stringify(currentrow))

  }
  function remove(e,index){
    e.preventDefault();
    const currentrow = userdata[index]
    const newUserdata = userdata.filter(ele=>(ele.Uid!==currentrow.Uid))
    setUserdata(newUserdata)
    localStorage.removeItem(currentrow.Uid)
  }
  function addRow() {
    setUserdata([
      ...userdata,
      {
        name: "singam",
        dob: "",
        Uid: "",
        Mno: "",
        age: "",
      },
    ]);
  }
  return (
    <div className="tableInfo">
      <p>Add New Person</p><br/><br/><br/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>DateOfBirth</th>
            <th>Adhaar Number</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((ele, index) => (
            <tr key={index}>
              <td>
                <input type="text" name="name" value={ele.name} onChange={(e)=>{inputChange(e,index)}}/>
              </td>
              <td>
                <input type="text" name="dob"  value={ele.dob} onChange={(e)=>{inputChange(e,index)}}/>
              </td>
              <td>
                <input type="text" name="Uid" value={ele.Uid} onChange={(e)=>{inputChange(e,index)}}/>
              </td>
              <td>
                <input type="text" name="Mno" value={ele.Mno} onChange={(e)=>{inputChange(e,index)}}/>
              </td>
              <td>
                <input type="text" className="age" name="age" value={ele.age} onChange={(e)=>{inputChange(e,index)}}/>
              </td>
              <td>
                <button onClick={(e)=>{submit(e, index)}} style={{margin:"0 .5rem"}}>Save</button>
                <button onClick={(e)=>{remove(e,index)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table><br/><br/><br/>
      <div style={{textAlign:'end'}}>

      <button
        onClick={() => {
          addRow();
        }}
        className="addButton"
        >
        Add
      </button>
        </div>
    </div>
  );
}

export default TableInfo;
