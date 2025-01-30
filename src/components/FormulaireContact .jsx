// import { useState } from "react";
// import { motion } from "framer-motion";

// const FormulaireContact = () => {
//   const [prenom, setPrenom] = useState("");
//   const [sujet, setSujet] = useState("");
//   const [messageEnvoye, setMessageEnvoye] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setTimeout(() => {
//       setMessageEnvoye(true);

//       setTimeout(() => {
//         window.location.href = `mailto:?subject=${encodeURIComponent(
//           sujet
//         )}&body=${encodeURIComponent(
//           "Bonjour, \n\nJe vous contacte au sujet de : " +
//             sujet +
//             "...\n\nCordialement, " +
//             prenom
//         )}`;
//       }, 2000);
//     }, 1000);
//   };

//   const handleCloseModal = () => {
//     setMessageEnvoye(false);
//   };

//   return (
//     <motion.div
//       whileInView={{ opacity: 1, x: 0 }}
//       initial={{ opacity: 0, x: -210 }}
//       transition={{ duration: 1 }}
//       className="flex justify-center items-center  "
//     >
//       <div className=" p-8 rounded-xl shadow-xl w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-center mb-6">
//           Contactez-moi
//         </h2>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-300">Prénom</label>
//             <input
//               type="text"
//               value={prenom}
//               onChange={(e) => setPrenom(e.target.value)}
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
//               placeholder="Entrez votre prénom"
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-gray-300">Sujet</label>
//             <input
//               type="text"
//               value={sujet}
//               onChange={(e) => setSujet(e.target.value)}
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Entrez le sujet"
//               required
//             />
//           </div>

//           <motion.button
//             type="submit"
//             className="w-full p-3 border text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             Envoyer
//           </motion.button>
//         </form>
//       </div>

//       {messageEnvoye && (
//         <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1, duration: 1 }}
//             className=" p-8 rounded-xl shadow-xl text-center max-w-md w-full relative"
//           >
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-2 right-2 text-xl font-semibold text-gray-700 hover:text-gray-900 focus:outline-none"
//             >
//               &times;
//             </button>

//             <h3 className="text-2xl font-semibold text-green-500">
//               Votre message a été envoyé !
//             </h3>
//             <p className="mt-4 text-gray-700">
//               Vous allez être redirigé vers votre boîte mail.
//             </p>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 2, duration: 1 }}
//               className="mt-6 text-sm text-gray-500"
//             >
//               Attendez un instant...
//             </motion.div>
//           </motion.div>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default FormulaireContact;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FormulaireContact = () => {
  const [prenom, setPrenom] = useState("");
  const [sujet, setSujet] = useState("");
  const [messageEnvoye, setMessageEnvoye] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageEnvoye(true);

    const mailContent = `Bonjour,\n\nJe vous contacte au sujet de : ${sujet}...\n\nCordialement,\n${prenom}`;

    // Copier dans le presse-papier pour plus de flexibilité
    navigator.clipboard.writeText(mailContent);

    setTimeout(() => {
      window.location.href = `mailto:?subject=${encodeURIComponent(
        sujet
      )}&body=${encodeURIComponent(mailContent)}`;
    }, 2000);
  };

  const handleCloseModal = () => {
    setMessageEnvoye(false);
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -210 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center"
    >
      <div className="p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Contactez-moi
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-500">Prénom</label>
            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Entrez votre prénom"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-500">Sujet</label>
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
            className="w-full p-3  text-white font-semibold rounded-md border"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Envoyer
          </motion.button>
        </form>
      </div>

      {/* Modal d'envoi */}
      <AnimatePresence>
        {messageEnvoye && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-white rounded-xl shadow-xl text-center max-w-md w-full relative"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-xl font-semibold text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                &times;
              </button>

              <h3 className="text-2xl font-semibold text-green-500">
                Votre message a été envoyé !
              </h3>
              <p className="mt-4 text-gray-700">
                Vous allez être redirigé vers votre boîte mail.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="mt-6 text-sm text-gray-500"
              >
                Attendez un instant...
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FormulaireContact;
