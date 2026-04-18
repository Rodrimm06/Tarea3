import List from "./components/List";

function App() {
  const contacts = [
    { contact_name: "Juan Pérez", number: "123456789", label: "Amigo" },
    { contact_name: "Ana López", number: "987654321", label: "Trabajo" },
    { contact_name: "Carlos Ruiz", number: "555123456", label: "Familia" }
  ];

  return (
    <div className="">
      <div className='bg-blue-800 p-0 flex justify-left font-inter'>
      <h1 className="text-2xl mb-4 text-white p-5 font-bold">Mis contactos</h1>
      
      </div>
      <List contacts={contacts} />
    </div>
  );
}

export default App;