import React, { useState } from 'react';
import data from './data';
import List from './List';
import Axios from 'axios';
import Pagination from './Pagination';

const calculateAge = (dob) => {
  var today = new Date();
  var bDay = new Date(dob);
  var age = today.getFullYear() - bDay.getFullYear();
  bDay.setFullYear(today.getFullYear());
  if(bDay>today){
    age--;
  }
  return age;
}

function App() {

  const [personName,setPersonName]=useState('');
  const [dob,setDob]=useState('');
  const [img,setImg]=useState('');

  const [people, setPeople] = useState(data);
  const [currPage,setCurrPage]=useState(1);
  const [namesPerPage,setNamesPerPage]=useState(5);

  const indexOfLastName = currPage * namesPerPage;
  const indexOfFirstName = indexOfLastName - namesPerPage;
  const currNames = people.slice(indexOfFirstName,indexOfLastName);

  // const addNew = () => {
  //   console.log("inside Add New");
  //   Axios.post('http://localhost:3000/addNew', {
  //     friendName:personName, 
  //     birthDay:dob, 
  //     imgURL:img
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // };

  const paginateFn = (pageNumber) => {
    setCurrPage(pageNumber);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const person={id:new Date().getTime().toString(), name:personName, age:calculateAge(dob), image:img};
    console.log(person);
    // store_MySQL(new Date().getTime().toString(), personName, dob, img);
    // addNew();
    setPeople((people) => {
      return [...people,person];
    });
    setPersonName('');
    setDob('');
    setImg('');
    console.log("Blah");
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={currNames} />
        <Pagination namesPerPage={namesPerPage} totalNames={people.length} paginate={paginateFn} />
      </section>
      <br></br>
      <section className='container'>
        <form className="form-inline" >
          <div className="form-group row">
            <label htmlFor="friendName" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
               <input type="text" className="form-control" id="friendName" name="friendName" placeholder="Firstname Lastname" 
               value={personName} onChange={(e) => setPersonName(e.target.value)}/>
              </div>
          </div>
          <div className="form-group row">
            <label htmlFor="birthDay" className="col-sm-2 col-form-label">Birthday</label>
              <div className="col-sm-10">
               <input type="date" className="form-control" id="birthDay" name="birthDay" placeholder="DD/MM/YYYY" 
               value={dob} onChange={(e) => setDob(e.target.value)}/>
              </div>
          </div>
          <div className="form-group row">
            <label htmlFor="imgURL" className="col-sm-2 col-form-label">Image</label>
              <div className="col-sm-10">
               <input type="text" className="form-control" id="imgURL" name="imgURL" placeholder="Image URL" 
               value={img} onChange={(e) => setImg(e.target.value)}/>
              </div>
          </div>
        <button onClick={handleSubmit}>Add Item</button>
          {/* <button type="submit" className="btn btn-primary mb-2">Add Item</button> */}
        </form>

      </section>
    </main>
  );
}

export default App;
