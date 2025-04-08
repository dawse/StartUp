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
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ textAlign: 'center', color: '#333', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
            Nouvelle demande de devis reçue !
          </h2>
      
          <div style={{ padding: '15px', backgroundColor: '#fff', borderRadius: '8px' }}>
            <p><strong>Nom & Prénom :</strong> {fullName}</p>
            <p><strong>Téléphone :</strong> {phone}</p>
            <p><strong>Email :</strong> <a href={`mailto:${email}`} style={{ color: '#007bff', textDecoration: 'none' }}>{email}</a></p>
            <p><strong>Entreprise :</strong> {entreprise}</p>
      
            <hr style={{ border: '0.5px solid #ddd', margin: '15px 0' }} />
      
            <p><strong>Services demandés :</strong></p>
            <ul style={{ paddingLeft: '20px' }}>
              {services.map((service, index) => (
                <li key={index} style={{ marginBottom: '5px' }}>{service}</li>
              ))}
            </ul>
      
            <p><strong>Identité visuelle :</strong> <span style={{ color: identite_visuelle === "oui" ? "green" : "red" }}>{identite_visuelle === "oui" ? "Oui" : "Non"}</span></p>
            <p><strong>Budget approximatif :</strong> {budget}</p>
      
            <hr style={{ border: '0.5px solid #ddd', margin: '15px 0' }} />
      
            <p><strong>Description du projet :</strong></p>
            <p style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>{description}</p>
          </div>
      
          <footer style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#666' }}>
            <p>Merci de consulter cette demande dès que possible.</p>
          </footer>
        </div>
      );
      
};
