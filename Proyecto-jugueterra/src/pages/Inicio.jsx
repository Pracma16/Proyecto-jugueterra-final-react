import React from 'react';
import '../styles/Inicio.css'; // crea este archivo para estilos similares al formulario

function Inicio() {
  return (
    <div className="inicio-container">
      <img className='titulo' src="/img_juegos/logos/titulo.png" alt="Logo jugueterra" />
      <hr />
<section className="inicio-imagenes">
        <img
          src="/img_juegos/categorias/juegos.png"
          alt="Tablero de Senet antiguo"
        />
        <img
          src="/img_juegos/categorias/figuras.png"
          alt="Tablero recreativo del Senet"
        />
        <img
          src="/img_juegos/categorias/carrosypistas.png"
          alt="Reproducción moderna del Senet"
        />
         <img
          src="/img_juegos/categorias/legos.png"
          alt="Reproducción moderna del Senet"
        />
         <img
          src="/img_juegos/categorias/muñecas.png"
          alt="Reproducción moderna del Senet"
        />
         <img
          src="/img_juegos/categorias/peluches.png"
          alt="Reproducción moderna del Senet"
        />
      </section>
      <main className="inicio-texto">
        
        <p>
          Un <strong>Mundo de Juegos y Juguetes</strong> tu tienda online especializada en venta y alquiler de juegos y juguetes para niños, adultos, empresas, familias, amigos y colegios.
        </p>
        <p>
          Encontrá una amplia variedad de juegos inflables, metegoles, mesas de tejo, jenga gigante, juegos de salón y mucho más, diseñados para divertir, integrar y crear momentos inolvidables.
        </p>
      </main>

      <img className='baner' src="/img_juegos/logos/Jugueterabaner.png" alt="baner jugueterra animados" />

      <div className="inicio-enlaces">
        <a href="https://openart.ai/image/create" target="_blank" rel="noopener noreferrer">
          Crea tu propio Juguete
        </a>
        <a href="https://www.simcompanies.com/es/" target="_blank" rel="noopener noreferrer">
          Aprende a emprender Jugando
        </a>
        <a href="https://playgameoflife.com/" target="_blank" rel="noopener noreferrer">
          El Juego de la vida
        </a>
      </div>
    </div>
  );
}

export default Inicio;
