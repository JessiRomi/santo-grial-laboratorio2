import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

const Navbar = () => {
  const items = [
    { label: 'Inicio', icon: 'pi pi-home', command: () => window.location = "/" },
    { label: 'Quienes Somos', icon: 'pi pi-warehouse', command: () => window.location = "/about" },
    { label: 'Contacto', icon: 'pi pi-envelope', command: () => window.location = "/contact" }
  ];

  return (
    <header className="navbar">
      <Menubar model={items} className="menu">
        <div className="p-menubar-end">
          <InputText placeholder="Search" />
        </div>
      </Menubar>
    </header>
  );
};

export default Navbar;
