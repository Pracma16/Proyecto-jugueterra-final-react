import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';
import styled from 'styled-components';
import "../styles/Navbar.css";
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const { usuario, isAuthenticated, cerrarSesion } = useAuthContext();
  const { vaciarCarrito, carrito } = useCartContext();
  const navigate = useNavigate();

  const totalItemsCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);

  const manejarCerrarSesion = () => {
    navigate("/productos");
    setTimeout(() => {
      vaciarCarrito();
      cerrarSesion();
    }, 100);
  };

  return (
    <>
      <NavbarContainer className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <Logo to="/" className="navbar-brand">Jugueterra</Logo>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent"
            aria-controls="navbarContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/alquiler" className="nav-link">Alquiler</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/productos" className="nav-link">Productos</NavLink>
              </li>
              {usuario?.nombre === "admin" && (
                <li className="nav-item">
                  <NavLink to="/formulario-producto" className="nav-link">Agregar Producto</NavLink>
                </li>
              )}
            </ul>

            <SeccionUsuario className="d-flex align-items-center gap-3">
              <ContenedorCarrito> 
                <IconoCarrito to="/pagar" className="nav-link d-flex align-items-center">
                  <span className="me-1">Carrito</span>
                  <FaShoppingCart />  
                  {totalItemsCarrito > 0 && (
                    <ContadorCarrito>
                      {totalItemsCarrito}
                    </ContadorCarrito>
                  )}
                </IconoCarrito>
              </ContenedorCarrito>

              {isAuthenticated ? (
                <ContenedorUsuario className="d-flex align-items-center gap-3">
                  <Bienvenida>Hola, {usuario.nombre}</Bienvenida>
                 
                  {usuario.nombre === "admin" && (
                    <NavLinkAdmin to="/dashboard" className="nav-link">Dashboard</NavLinkAdmin>
                  )}
                 
                  <BotonCerrarSesion onClick={manejarCerrarSesion} className="btn btn-outline-light btn-sm">
                    Cerrar Sesión
                  </BotonCerrarSesion>
                </ContenedorUsuario>
              ) : (
                <NavLink to="/iniciar-sesion" className="nav-link">Iniciar Sesión</NavLink>
              )}
            </SeccionUsuario>
          </div>
        </div>
      </NavbarContainer>
      <NavbarSpacer />
    </>
  )
} 

export default Navbar;

// Styled Components con efecto BLUR + GLASS
const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;

  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);

  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  padding: 0.7rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarSpacer = styled.div`
  height: 90px;

  @media (max-width: 991.98px) {
    height: 80px;
  }
`;

const Logo = styled(Link)`
  color: black !important;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);

  &:hover {
    color: #100f64ff !important;
  }
`;

// NavLink normal con efecto glass
const NavLink = styled(Link)`
  color: #060818ff !important;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(5px);
    color: #060818ff !important;
  }
`;

// NavLink especial para admin con glass distinto
const NavLinkAdmin = styled(Link)`
  color: black !important;
  background: rgba(255,255,255,0.5);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    background: rgba(255,255,255,0.8);
    color: #6b520a !important;
  }
`;

const Bienvenida = styled.span`
  color: black;
  font-size: 0.9rem;
  margin: 0;
  white-space: nowrap;

  text-shadow: 0 1px 3px rgba(0,0,0,0.3);

  @media (max-width: 991.98px) {
    margin-bottom: 0.5rem;
  }
`;

// Botón con glass
const BotonCerrarSesion = styled.button`
  background: rgba(255, 255, 255, 0.25);
  color: #060818ff;
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.2s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
    color: #333;
    border-color: rgba(19, 29, 87, 0.8);
  }

  @media (max-width: 991.98px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const ContenedorCarrito = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconoCarrito = styled(Link)`
  color: white !important;
  text-decoration: none;
  padding: 0.6rem 0.8rem;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 1rem;
  gap: 6px;
  transition: 0.2s ease-in-out;

  background: rgba(7, 10, 43, 0.93);
  border-radius: 12px;
  backdrop-filter: blur(6px);

  &:hover {
    background: rgba(16, 27, 85, 0.93);
    color: gold !important;
  }
`;

const ContadorCarrito = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  background: rgba(255, 0, 0, 0.85);
  color: white;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;

  backdrop-filter: blur(4px);
  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
`;

const SeccionUsuario = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    width: 100%;
  }
`;

const ContenedorUsuario = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`;
