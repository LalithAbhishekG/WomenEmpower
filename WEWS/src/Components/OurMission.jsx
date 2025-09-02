import { motion } from "framer-motion";
import Ourmissionbg from "../assets/About/ourmission-bg.png";
import Ourmissionlogo from "../assets/About/ourmission-logo.png";

function OurMission() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Ourmissionbg})` }}
        className="bg-cover bg-center bg-no-repeat bg-fixed h-screen flex md:justify-end justify-center"
      >
        <motion.div
          className="m-10 flex flex-col items-center md:items-end space-y-10 md:mr-40 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
      
          <motion.div
            style={{ backgroundImage: `url(${Ourmissionlogo})` }}
            className="md:h-96 md:w-96 h-56 w-56 sm:h-64 sm:w-64 bg-cover bg-center bg-no-repeat mb-[-2rem]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          />

          <motion.div
            className="md:w-[500px] w-80 bg-transparent border border-white p-6 rounded-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <motion.ul
              className="space-y-7 text-white text-sm md:text-base leading-relaxed mx-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {[
                "adjaidhsiaohdi aoihia soihda osho daohs doah doashodahosdaos hdoaih sd ohiaso hdasolh",
                "adh uaih9duh a iuhdsh ahsih diuahduasihduashd uahdusha duahs dhasihd asih dsaiuhdas",
                "adjaidhsiaohdi aoihia soihda osho daohs doah doashodahosdaos hdoaih sd ohiaso hdasolh",
                "adh uaih9duh a iuhdsh ahsih diuahduasihduashd uahdusha duahs dhasihd asih dsaiuhdas",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  className="list-disc list-inside"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default OurMission;
