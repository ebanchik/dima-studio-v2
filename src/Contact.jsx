import { useNavigate } from 'react-router-dom';
import { Header } from './Header'

export function Contact() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className='page'>
      <Header />
      <button className="button" onClick={handleExit}>DIMA</button>
      <div className="inquire-container">
        <a href="mailto:example@example.com" className="inquire">Inquire</a>
      </div>
    </div>
  );
}

