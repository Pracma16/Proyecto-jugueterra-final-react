import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Alquiler.css";

export default function Alquiler({ isAuthenticated, usuario, setIsAuthenticated, setUsuario }) {
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState([]);

  const categorias = [
    {
      id: 1,
      titulo: "Niños",
      descripcion:
        "Juegos seguros, coloridos y divertidos, como castillos inflables, plazas blandas, bloques gigantes tipo lego y juegos blandos. Ideales para fiestas infantiles y eventos familiares.",
      imagen:
        "https://www.thewrightinflatables.com/userfiles/20191005-112903-1.jpg",
      precio: 25000,
    },
    {
      id: 2,
      titulo: "Adultos",
      descripcion:
        "Juegos mecánicos y de salón como ring de boxeo inflable, lucha de gladiadores, metegoles, tejo y ping pong. Perfectos para fiestas o eventos sociales.",
      imagen:
        "https://www.archerytagbarcelona.com/wp-content/uploads/2017/08/Incentivos-empresariales-a-modo-de-actividades-en-Barcelona-2.jpg",
      precio: 30000,
    },
    {
      id: 3,
      titulo: "Empresas",
      descripcion:
        "Juegos para integración grupal, como jenga gigante y metegoles personalizados. Ideales para team building y celebraciones corporativas.",
      imagen:
        "https://www.webyeventos.com.ar/media/CACHE/images/legacy/services/-20111215-47/06-08-12zzproducciones-bungee-1/3031fd9e0559e4fde830296279d49fa2.jpg",
      precio: 40000,
    },
    {
      id: 4,
      titulo: "Amigos",
      descripcion:
        "Juegos sociales como metegol, ping pong y lucha de gladiadores inflable. Ideales para cumpleaños y reuniones divertidas.",
      imagen:
        "https://www.webyeventos.com.ar/media/CACHE/images/legacy/services/-20111215-47/06-08-12zzproducciones-bungee-2/96d26fe3bf0ca2408ce8874d3ce817a9.jpg",
      precio: 28000,
    },
    {
      id: 5,
      titulo: "Familias",
      descripcion:
        "Juegos para todas las edades: castillos inflables familiares, jenga gigante y tejo. Perfectos para encuentros familiares.",
      imagen:
        "https://www.partyjump.com/wp-content/uploads/2018/02/Spin-Challenge.png",
      precio: 32000,
    },
    {
      id: 6,
      titulo: "Colegios",
      descripcion:
        "Juegos grupales como jenga gigante, metegoles y salones recreativos. Ideales para eventos escolares y fiestas de fin de año.",
      imagen:
        "https://www.webyeventos.com.ar/media/CACHE/images/legacy/services/-20111215-47/06-08-12zzproducciones-simulador-doble-7/3466f84367c5344ec3602ff93fa9ef47.jpg",
      precio: 35000,
    },
  ];

  const manejarReserva = (categoria) => {
    if (!isAuthenticated) {
      // Si el usuario no ha iniciado sesión, lo enviamos al login
      navigate("/iniciar-sesion", { state: { from: "alquiler", carrito: [categoria] } });
    } else {
      // Si ya está autenticado, agregamos al carrito (o podrías enviarlo a pagar)
      setCarrito([...carrito, categoria]);
      alert(`Has reservado: ${categoria.titulo}`);
    }
  };

  return (
    <section className="alquiler-container">
      <h2>🎪 Alquiler de Juegos para Eventos</h2>
      <p className="intro">
        Elegí la categoría ideal según tu tipo de evento y ¡reservá tus juegos favoritos para vivir una experiencia única!
      </p>

      <div className="categorias-grid">
        {categorias.map((cat) => (
          <div className="categoria-card" key={cat.id}>
            <img src={cat.imagen} alt={cat.titulo} className="categoria-img" />
            <h3>{cat.titulo}</h3>
            <p>{cat.descripcion}</p>
            <p className="precio">Precio estimado: ${cat.precio.toLocaleString()}</p>
            <button
              className="btn-reservar"
              onClick={() => manejarReserva(cat)}
            >
              Reservar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
