

function Contact({contact_name, number, label, onDelete }) {
  return (
    <div className="flex  items-center justify-between gap-3 p-3 border rounded-lg mb-2 b-5 p-5 m-5">
      <h2 className="text-lg font-bold font-inter">{contact_name}</h2>
      <p className="text-gray-600 font-inter p-4">{number}</p>
      <p className="text-white bg-blue-500 rounded-full font-inter p-4">{label}</p>
      <button className="text-white bg-red-500 rounded-full font-inter px-4 py-2 " onClick={onDelete}>X</button>
    </div>
  );
}

export default Contact;