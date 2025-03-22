import React from "react";

export const EmailTemplate = ({
  fullName,
  phone,
  email,
  entreprise,
  services,
  identite_visuelle,
  budget,
  description,
}: {
  fullName: string;
  phone: string;
  email: string;
  entreprise: string;
  services: string[];
  identite_visuelle: string;
  budget: string;
  description: string;
}) => {
  return (
    <div>
      <h2>Nouvelle demande de devis reçue !</h2>
      <p>
        <strong>Nom & Prénom :</strong> {fullName}
      </p>
      <p>
        <strong>Téléphone :</strong> {phone}
      </p>
      <p>
        <strong>Email :</strong> {email}
      </p>
      <p>
        <strong>Entreprise :</strong> {entreprise}
      </p>
      <p>
        <strong>Services demandés :</strong> {services.join(", ")}
      </p>
      <p>
        <strong>Identité visuelle :</strong> {identite_visuelle === "oui" ? "Oui" : "Non"}
      </p>
      <p>
        <strong>Budget approximatif :</strong> {budget}
      </p>
      <p>
        <strong>Description du projet :</strong> {description}
      </p>
    </div>
  );
};
