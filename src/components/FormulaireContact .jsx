import { useState } from "react";
import { motion } from "framer-motion";

const FormulaireContact = () => {
  const [prenom, setPrenom] = useState("");
  const [sujet, setSujet] = useState("");
  const [messageEnvoye, setMessageEnvoye] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simule un délai avant de montrer le message
    setTimeout(() => {
      setMessageEnvoye(true);
      // Ouvre l'application de messagerie avec un email pré-rempli
      window.location.href = `mailto:?subject=${encodeURIComponent(
        sujet
      )}&body=${encodeURIComponent(
        "Bonjour, \n\nJe vous contacte au sujet de : " +
          sujet +
          "...\n\nCordialement, " +
          prenom
      )}`;
    }, 2000); // Délai de 2 secondes avant de montrer le message
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Contactez-moi
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Prénom</label>
            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Entrez votre prénom"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Sujet</label>
            <input
              type="text"
              value={sujet}
              onChange={(e) => setSujet(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Entrez le sujet"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Envoyer
          </motion.button>
        </form>

        {messageEnvoye && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-6 text-center text-green-500 font-semibold"
          >
            Votre message a été envoyé ! Vous allez être redirigé vers votre
            boîte mail.
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FormulaireContact;
