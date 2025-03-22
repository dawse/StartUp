export const EmailTemplate = ({ fullName, email, phone, message }) => {
    return (
      <div>
        <h2>Nous avons reçu un nouveau message !</h2>
        <p><strong>Nom complet :</strong> {fullName}</p>
        <p><strong>Email :</strong> {email}</p>
        <p><strong>Téléphone :</strong> {phone}</p>
        <p><strong>Message :</strong> {message}</p>
      </div>
    );
  };
  