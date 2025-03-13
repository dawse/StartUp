"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
// TODO fix the responsivness
const DemandeDeDevis = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  // Prevent rendering on the server-side
  if (!hasMounted) {
    return null;
  }

  return (
    <section id="devis" className="px-4 md:px-8 2xl:px-0 mt-16"> 
      <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl mx-auto rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
        >
          {/* Section Title */}
          <h2 className="mb-10 text-3xl font-semibold text-center text-black dark:text-white xl:text-sectiontitle2">
            Demande de devis
          </h2>

          {/* Form Start */}
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            {/* Name and Phone Input */}
            <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:gap-14">
              <input
                type="text"
                placeholder="Nom & Prénom"
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
              <input
                type="text"
                placeholder="Téléphone"
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
            </div>

            {/* Email and Company Input */}
            <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:gap-14">
              <input
                type="email"
                placeholder="Adresse email"
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
              <input
                type="text"
                placeholder="Entreprise"
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
            </div>

            {/* Services Selection */}
            <div className="mb-7.5">
              <h3 className="mb-3 text-lg font-medium text-black dark:text-white">
                Votre demande concerne :
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {[ 
                  "Site Internet", 
                  "Site E-commerce", 
                  "Site Sur-mesure", 
                  "Re-design d'un site existant", 
                  "Community management", 
                  "Référencement naturel (SEO)", 
                  "Maintenance et mise à jour de site web",
                ].map((option) => (
                  <label key={option} className="flex items-center gap-2 w-full">
                    <input type="checkbox" name="services" value={option} className="h-4 w-4" />
                    <span className="text-black dark:text-white whitespace-nowrap">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Visual Identity Selection */}
            <div className="mb-7.5">
              <h3 className="mb-3 text-lg font-medium text-black dark:text-white">
                Avez-vous besoin d'une identité visuelle ?
              </h3>
              <select
                name="identite_visuelle"
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
              >
                <option value="oui">Oui</option>
                <option value="non">Non</option>
              </select>
            </div>

            {/* Budget Input */}
            <div className="mb-7.5">
              <h3 className="mb-3 text-lg font-medium text-black dark:text-white">
                Budget approximatif
              </h3>
              <input
                type="text"
                placeholder="Ex: 5000€ - 10 000€"
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
              />
            </div>

            {/* Project Description Input */}
            <div className="mb-11.5">
              <h3 className="mb-3 text-lg font-medium text-black dark:text-white">
                Décrivez brièvement votre projet :
              </h3>
              <textarea
                name="description"
                placeholder="Décrivez votre projet ici..."
                rows={4}
                className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                aria-label="Envoyer la demande"
                className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
              >
                Envoyer la demande
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default DemandeDeDevis;
