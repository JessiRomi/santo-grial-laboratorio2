import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Contact = () => {
  return (
    <div className='formulario'>
      <h2>Contacto</h2>
      <div className="p-field">
        <label htmlFor="name">Nombre</label>
        <InputText className='input' id="name" type="text" />
      </div>
      <div className="p-field">
        <label htmlFor="email">Email</label>
        <InputText className='input' id="email" type="email" />
      </div>
      <div className="p-field">
        <Button label="Enviar" icon="pi pi-check" />
      </div>
    </div>
  );
};

export default Contact;
