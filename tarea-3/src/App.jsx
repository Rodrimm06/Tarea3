import { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const [contacts, setContacts] = useState([
    { contact_name: "Juan Pérez", number: "123456789", label: "Amigo" },
    { contact_name: "Ana López", number: "987654321", label: "Trabajo" },
    { contact_name: "Carlos Ruiz", number: "555123456", label: "Familia" }
  ]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact =(indexContact) =>{
      const newContacts = contacts.filter((_,index) => index !==indexContact);
      setContacts(newContacts)
  }
  const [filter, setFilter] = useState("");
  
  const filteredContacts = filter === ""
    ? contacts
    : contacts.filter((c) => c.label === filter);
  return (
    <div>
      <div className="bg-blue-800 flex font-inter rounded-b-3xl justify-center">
        <h1 className="text-2xl text-white p-5 font-bold">
          Mis contactos
        </h1>
      </div>

      <Form onAdd={addContact} />
      <div className="flex justify-center my-4">
        <select onChange={(e) => setFilter(e.target.value)} className="bg-blue-800 text-white p-4 rounded-3xl font-bold">
          <option value="">Todos</option>
          <option value="Amigo">Amigo</option>
          <option value="Familia">Familia</option>
          <option value="Trabajo">Trabajo</option>
        </select>
      </div>
      <List contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;