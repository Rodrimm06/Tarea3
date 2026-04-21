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

  return (
    <div>
      <div className="bg-blue-800 flex font-inter rounded-b-3xl justify-center">
        <h1 className="text-2xl text-white p-5 font-bold">
          Mis contactos
        </h1>
      </div>

      <Form onAdd={addContact} />
      <List contacts={contacts} />
    </div>
  );
}

export default App;