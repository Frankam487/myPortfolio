

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const AnimatedCommits = () => {
//   const [count, setCount] = useState(0);
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   useEffect(() => {
//     if (inView) {
//       let i = 0;
//       const interval = setInterval(() => {
//         if (i < 400) {
//           setCount(i);
//           i += 10; // Incrément de 10 en 10
//         } else if (i === 400) {
//           setCount(400);
//           clearInterval(interval);
//           // Pause de 1 seconde avant de recommencer
//           setTimeout(() => {
//             i = 0; // Réinitialise à 0 après la pause
//             setCount(0); // Remet le compteur à 0
//           }, 1000); // Pause de 1 seconde
//         }
//       }, 30); // Vitesse de l'animation

//       return () => clearInterval(interval); // Nettoyage de l'intervalle au démontage
//     }
//   }, [inView]);

//   return (
//     <div ref={ref} style={{ textAlign: "center", marginTop: "50vh" }}>
//       <motion.h1>
//         Commits <motion.span>{count}</motion.span>
//       </motion.h1>
//     </div>
//   );
// };

// export default AnimatedCommits;
