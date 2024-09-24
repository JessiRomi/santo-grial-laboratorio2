import React from 'react';
import { Button } from 'primereact/button';

const Asideright = () => {
    return (
        <aside className="asideright">
            <h3>Artículos Destacados</h3>
            <Button label="Ofertas" className="p-button-raised gradient-button" />
            <Button label="Más Productos" className="p-button-raised gradient-button" />
            <Button label="Sugerencias" className="p-button-raised gradient-button" />
        </aside>
    );
};

export default Asideright;
