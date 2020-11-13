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
        {/* <button onClick={() => setPeople([])}>clear all</button> */}
      </section>
    </main>
  );
}

export default App;
