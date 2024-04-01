import { Header } from './Header'

export function Contact() {
  return (
    <div className='page'>
      <Header />
      <div className="inquire-container">
        <a href="mailto:example@example.com" className="inquire">Inquire</a>
      </div>
    </div>
  );
}

