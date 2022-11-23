import './App.css';
import { useState } from 'react';
import AddContact from './components/AddContact';

function App() {
  let [contactList, setContactList] = useState([]);
  return (
    <div>

      <AddContact
        onSendContact={(myContact) => 
          setContactList([...contactList, myContact])
          }
      />

    </div>
  );
}

export default App;