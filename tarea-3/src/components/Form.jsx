import { useState } from "react";

function Form({ onAdd }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [label, setLabel] = useState("");

  const handleSubmit = () => {
    if (!name || !number || !label) return;

    onAdd({
      contact_name: name,
      number: number,
      label: label,
    });

    setName("");
    setNumber("");
    setLabel("");
  };

  return (
    <div className="flex flex-col gap-3 p-4 font-inter">
      <input
        type="text"
        placeholder="Nombre completo"
        className="border p-2 rounded bg-gray-200"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Teléfono"
        className="border p-2 rounded bg-gray-200"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <select
        className={`border p-2 rounded bg-gray-200 ${
          label === "" ? "text-gray-400" : "text-black"
        }`}
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      >
        <option value="" className="text-black">Categoría</option>
        <option value="Amigo" className="text-black">Amigo</option>
        <option value="Familia" className="text-black">Familia</option>
        <option value="Trabajo" className="text-black">Trabajo</option>
      </select>

      <button
        className="bg-blue-800 text-white p-2 rounded font-bold"
        onClick={handleSubmit}
      >
        Agregar contacto
      </button>
    </div>
  );
}

export default Form;