import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Info() {
  return (
    <div>
      <Header />
      <div className="info-content">
        <h1>Bienvenido a mi Portafolio</h1>
        <p>
          En mi portafolio, encontrarás una selección de mis mejores trabajos y proyectos.
          Aquí podrás explorar mi experiencia y habilidades en diferentes áreas.
        </p>
        <h2>Características principales</h2>
        <ul>
          <li>Vista detallada de proyectos destacados.</li>
          <li>Explora mi experiencia y habilidades.</li>
          <li>Conoce más sobre mí y mi trabajo anterior.</li>
        </ul>
        <h2>Cómo empezar</h2>
        <p>
          Para comenzar, navega por los proyectos en mi portafolio. Cada proyecto incluye
          detalles y enlaces a más información. ¡Espero que disfrutes explorando mi trabajo!
        </p>
      </div>
      <Footer />
    </div>
  );
}

