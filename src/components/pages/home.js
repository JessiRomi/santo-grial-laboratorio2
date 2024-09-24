import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';    
import { Tag } from 'primereact/tag';  
import { ProductService } from '../../service/ProductService';  

const Home = () => {
  const [products, setProducts] = useState([]);

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return null;
    }
  };

  useEffect(() => {
    ProductService.getProductsSmall().then((data) => setProducts(data));
  }, []);

  const productCardTemplate = (product) => {
    return (
      <div className="product-card">
        <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} />
        <h4 className="product-name">{product.name}</h4>
        <h6 className="product-price">${product.price}</h6>
        <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
        <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
          <Button icon="pi pi-search" className="p-button p-button-rounded" />
          <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
        </div>
      </div>
    );
  };

  return (
      <div className="product-section">
        <h2 className="section-title">Productos Destacados</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              {productCardTemplate(product)}
            </div>
          ))}
        </div>
      </div>
  );
};

export default Home;
