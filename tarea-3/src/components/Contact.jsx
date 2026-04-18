function Contact({contact_name, number, label }) {
  return (
    <div className="flex items-center gap-3 p-3 border rounded-lg mb-2 b-5 p-5 m-5">
      <h2 className="text-lg font-bold font-inter">{contact_name}</h2>
      <p className="text-gray-600" font-inter>{number}</p>
      <p className="text-white bg-blue-500 rounded-full font-inter">{label}</p>
    </div>
  );
}

export default Contact;