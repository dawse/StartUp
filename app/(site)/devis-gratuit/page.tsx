"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const toastStyle = { style: { marginTop: "60px" } };

const serviceOptions = [ 
  "Site Internet", 
  "Site E-commerce", 
  "Site Sur-mesure", 
  "Re-design d'un site existant", 
  "Community management", 
  "Référencement naturel (SEO)", 
  "Maintenance et mise à jour de site web",
];

const DemandeDeDevis = () => {
  // Always call hooks at the top level
  const [hasMounted, setHasMounted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    entreprise: "",
    services: [] as string[],
    identite_visuelle: "oui",
    budget: "",
    description: "",
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Conditionally render content after all hooks are called
  if (!hasMounted) {
    return null;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // For checkboxes (services) handling
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const services = checked 
        ? [...prev.services, value] 
        : prev.services.filter((service) => service !== value);
      return { ...prev, services };
    });
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("Veuillez saisir votre nom et prénom.", toastStyle);
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error("Veuillez saisir votre numéro de téléphone.", toastStyle);
      return false;
    }
    const phoneRegex = /^\d{8}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Veuillez saisir un numéro de téléphone tunisien valide (8 chiffres).", toastStyle);
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Veuillez saisir votre adresse email.", toastStyle);
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Veuillez saisir une adresse email valide.", toastStyle);
      return false;
    }
    if (!formData.entreprise.trim()) {
      toast.error("Veuillez saisir le nom de votre entreprise.", toastStyle);
      return false;
    }
    if (formData.services.length === 0) {
      toast.error("Veuillez sélectionner au moins un service.", toastStyle);
      return false;
    }
    if (!formData.budget.trim()) {
      toast.error("Veuillez indiquer votre budget approximatif.", toastStyle);
      return false;
    }
    const budgetRegex = /^(\d{3,7}(\s?[€$])?|\d{3,7}\s?-\s?\d{3,7}(\s?[€$])?)$/;
    if (!budgetRegex.test(formData.budget)) {
      toast.error("Veuillez saisir un budget valide.", toastStyle);
      return false;
    }
    if (!formData.description.trim()) {
      toast.error("Veuillez décrire votre projet.", toastStyle);
      return false;
    }
    return true;
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    const loadingToast = toast.loading("Envoi en cours...", toastStyle);

    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      toast.dismiss(loadingToast);
      if (res.ok) {
        toast.success("Demande envoyée avec succès!", toastStyle);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          entreprise: "",
          services: [],
          identite_visuelle: "oui",
          budget: "",
          description: "",
        });
      } else {
        toast.error("Échec de l'envoi de la demande: " + result.error, toastStyle);
      }
    } catch (error) {
      console.error("Erreur:", error);
      toast.dismiss(loadingToast);
      toast.error("Une erreur est survenue.", toastStyle);
    }
  };

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
          <h2 className="mb-10 text-3xl font-semibold text-center text-black dark:text-white xl:text-sectiontitle2">
            Demande de devis
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Nom & Téléphone */}
            <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:gap-14">
              <input
                type="text"
                name="fullName"
                placeholder="Nom & Prénom"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
              <input
                type="text"
                name="phone"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
            </div>
            {/* Email & Entreprise */}
            <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:gap-14">
              <input
                type="email"
                name="email"
                placeholder="Adresse email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
              <input
                type="text"
                name="entreprise"
                placeholder="Entreprise"
                value={formData.entreprise}
                onChange={handleChange}
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
            </div>
            {/* Services */}
            <div className="mb-7.5">
              <h3 className="mb-3 text-base md:text-lg font-medium text-black dark:text-white">
                Votre demande concerne :
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {serviceOptions.map((option) => (
                  <label key={option} className="flex items-center gap-2 w-full">
                    <input 
                      type="checkbox" 
                      name="services" 
                      value={option} 
                      checked={formData.services.includes(option)}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4" 
                    />
                    {option === "Référencement naturel (SEO)" ? (
                      <>
                        <span className="inline md:hidden text-black dark:text-white whitespace-nowrap">SEO</span>
                        <span className="hidden md:inline text-black dark:text-white whitespace-nowrap">{option}</span>
                      </>
                    ) : option === "Maintenance et mise à jour de site web" ? (
                      <>
                        <span className="inline md:hidden text-black dark:text-white whitespace-nowrap">
                          Maintenance et mise à jour
                        </span>
                        <span className="hidden md:inline text-black dark:text-white whitespace-nowrap">{option}</span>
                      </>
                    ) : (
                      <span className="text-black dark:text-white whitespace-nowrap">{option}</span>
                    )}
                  </label>
                ))}
              </div>
            </div>
            {/* Identité visuelle */}
            <div className="mb-7.5">
              <h3 className="mb-3 text-lg font-medium text-black dark:text-white">
                Avez-vous besoin d'une identité visuelle ?
              </h3>
              <select
                name="identite_visuelle"
                value={formData.identite_visuelle}
                onChange={handleChange}
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
              >
                <option value="oui">Oui</option>
                <option value="non">Non</option>
              </select>
            </div>
            {/* Budget */}
            <div className="mb-7.5">
              <h3 className="mb-3 text-lg font-medium text-black dark:text-white">
                Budget approximatif
              </h3>
              <input
                type="text"
                name="budget"
                placeholder="Ex: 500DT - 1000DT"
                value={formData.budget}
                onChange={handleChange}
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
              />
            </div>
            {/* Description */}
            <div className="mb-11.5">
              <h3 className="mb-3 text-lg font-medium text-black dark:text-white">
                Décrivez brièvement votre projet :
              </h3>
              <textarea
                name="description"
                placeholder="Décrivez votre projet ici..."
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
              ></textarea>
            </div>
            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
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
