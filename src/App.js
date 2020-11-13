import React, { useState } from 'react';
import data from './data';
import List from './List';
import Pagination from './Pagination';
function App() {
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

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={currNames} />
        <Pagination namesPerPage={namesPerPage} totalNames={people.length} paginate={paginateFn} />
      </section>
      <br></br>
      <section className='container'>
        <form class="form-inline">
          <div class="form-group row">
            <label htmlfor="friendName" className="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
               <input type="text" className="form-control" id="friendName" name="friendName" placeholder="Venkatesh Prasad"/>
              </div>
          </div>
          <div class="form-group row">
            <label htmlfor="birthDay" className="col-sm-2 col-form-label">Birthday</label>
              <div class="col-sm-10">
               <input type="text" className="form-control" id="birthDay" name="birthDay" placeholder="DD/MM/YYYY"/>
              </div>
          </div>
          <div class="form-group row">
            <label htmlfor="imgURL" className="col-sm-2 col-form-label">Image URL</label>
              <div class="col-sm-10">
               <input type="text" className="form-control" id="imgURL" name="imgURL" placeholder="Image URL"/>
              </div>
          </div>
        <button>Add Item</button>
          {/* <button type="submit" class="btn btn-primary mb-2">Add Item</button> */}
        </form>

      </section>
    </main>
  );
}

export default App;
