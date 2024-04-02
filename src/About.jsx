import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header'

export function About() {
  const navigate = useNavigate();

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
      cursor.classList.remove('hovered');
    }
  }, []);

  const handleExit = () => {
    navigate('/');
  };


  return (
    <div className="page about-page">
        <div className="container">
          < Header />
          <button className="button" onClick={handleExit}>DIMA</button>
          <h1 className="about-title">THE CREATOR</h1>
          <div className="row">
            <div className="col-md-4 col-sm-12 order-md-2 order-sm-1">
              <img src="assets/anika-pfp.jpeg" alt="Description" className="about-photo" />
            </div>
            <div className="col-md-8 col-sm-12 order-md-1 order-sm-2">
              <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptas sed velit, dicta modi, rem harum architecto mollitia est accusamus deserunt! Quisquam doloribus libero reiciendis vero eius culpa praesentium ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet quod eligendi quo. Iusto perspiciatis maiores corporis fugit, expedita vitae excepturi, unde libero quod praesentium, deleniti qui atque tempora asperiores.
              Doloremque temporibus sed, magni, commodi beatae cupiditate eaque sunt nulla fuga dolorum consequatur voluptatum voluptates. Laudantium, illum. Velit debitis dolore maxime est accusantium, rem ab quasi neque, voluptates, sequi nihil.
              Debitis asperiores nisi impedit aspernatur distinctio nulla veritatis dolorum sed labore atque. In rerum temporibus officiis voluptatum quia obcaecati nisi, delectus quam quisquam saepe totam ipsum eligendi laudantium esse nulla?
              Odit laudantium inventore sequi expedita officiis ullam autem. Pariatur soluta culpa asperiores dolorum magnam ex, distinctio facere voluptatem numquam et atque eligendi voluptatibus ratione excepturi? Nulla enim quae natus numquam.
</p>
            </div>
          </div>
        </div>
    </div>
  );
}





