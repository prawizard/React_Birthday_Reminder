import React, { useState } from 'react';
import data from './data';
import List from './List';
import Pagination from './Pagination';
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
  // console.log(currNames);

  const paginateFn = (pageNumber) => {
    setCurrPage(pageNumber);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const person={id:new Date().getTime().toString(), name:personName, age:dob, image:img};
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
        <form className="form-inline" onSubmit={handleSubmit}>
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
               <input type="text" className="form-control" id="birthDay" name="birthDay" placeholder="DD/MM/YYYY" 
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
        <button>Add Item</button>
          {/* <button type="submit" className="btn btn-primary mb-2">Add Item</button> */}
        </form>

      </section>
    </main>
  );
}

export default App;
