import Contact from './Contact';

function List({ contacts, onDelete }) {
  
  return (
    <div>
        <h2 className='text-lg font-bold font-inter m-5'>{contacts.length} contactos guardados</h2>
      {contacts.map((con, index) => (
        <Contact
          key={index}
          contact_name={con.contact_name}
          label={con.label}
          number={con.number}
          onDelete={()=>onDelete(index)}
        />
        
      ))}

      
    </div>
  );
}

export default List;