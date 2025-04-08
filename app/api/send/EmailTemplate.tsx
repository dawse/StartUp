export const EmailTemplate = ({ fullName, email, phone, message }) => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ textAlign: 'center', color: '#333', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
            Nous avons reçu un nouveau message !
          </h2>
      
          <div style={{ padding: '15px', backgroundColor: '#fff', borderRadius: '8px' }}>
            <p><strong>Nom complet :</strong> {fullName}</p>
            <p><strong>Email :</strong> <a href={`mailto:${email}`} style={{ color: '#007bff', textDecoration: 'none' }}>{email}</a></p>
            <p><strong>Téléphone :</strong> {phone}</p>
      
            <hr style={{ border: '0.5px solid #ddd', margin: '15px 0' }} />
      
            <p><strong>Message :</strong></p>
            <p style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>{message}</p>
          </div>
      
          <footer style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#666' }}>
            <p>Merci de traiter ce message dès que possible.</p>
          </footer>
        </div>
      );
      
  };
  