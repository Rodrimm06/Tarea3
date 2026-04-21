

function Contact({contact_name, number, label, onDelete }) {
  return (
    <div className="flex  items-center justify-between gap-3 p-3 border rounded-lg mb-2 b-5 p-5 m-5">
      <h2 className="text-lg font-bold font-inter">{contact_name}</h2>
      <p className="text-gray-600 font-inter p-4">{number}</p>
      <p className={`text-white rounded-full font-inter p-4 font-bold
        ${label === "Amigo" ? "bg-teal-500" : label==="Trabajo" ? "bg-cyan-500" : label==="Familia" ?"bg-sky-500" :"bg-blue-800"}`}>{label}</p>
      <button className="text-white bg-red-600 rounded-full font-inter px-4 py-2 " onClick={onDelete}>X</button>
    </div>
  );
}

export default Contact;