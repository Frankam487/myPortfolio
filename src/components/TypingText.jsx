import React from "react";
import Typewriter from "typewriter-effect";

const TypingText = () => {
  return (
    <div className="flex justify-center items-center">
      <Typewriter
        options={{
          strings: [
            "Hey Yo!!, je suis <span className='bg-red-600'> Frank_Kamgang</span>. Je conçois des Applications web modernes et réactifs avec React, TailwindCSS et JavaScript. Quand je ne code pas, je suis souvent à la recherche de nouvelles technologies ou en train de travailler sur des projets créatifs. Ensemble, faisons de votre vision une réalité !",
          ],
          autoStart: true,
          loop: true,
          delay: 100,
        }}
      />
    </div>
  );
};

export default TypingText;
