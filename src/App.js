import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/Searchbox';
import Sticky from './components/Sticky';
import 'tachyons';

function App () {    
  const [friendsList, setFriendsList] = useState([]);             //creating State using hooks
  const [searchfieldContent, setSearchfieldContent] = useState('');

  useEffect(() => {
    fetch('https://gorest.co.in/public/v2/users')
      .then(response => response.json())
      .then(array => setFriendsList(array));
  },[]) 

  const onSearchChange = (event) => {          // It is not part of React, therefore the Arrow function. This function is passed to SearchBox component, it is triggered when SearchBox is changed.
    setSearchfieldContent(event.target.value)        // This assigns the value of SearchBox into State of the App Component
  }

  const filteredFriends = friendsList.filter(friend => {             // A function that creates a new list of friends containing the Searchbox content
    return friend.name.toLowerCase().includes(searchfieldContent.toLowerCase())
  })

  if (!friendsList.length) {
    return <h1 className='tc f1'>Loading</h1>
  } else 
    return (               // Whole website content is rendered here
    <div className='tc'>
      <Sticky>
        <h1 className='f1'>MyFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        
      </Sticky>

      <CardList friends={filteredFriends}/>
    </div>
  );
}

export default App;



