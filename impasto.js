document.addEventListener('DOMContentLoaded', function () {
    const applyStyles = () => {
      let applied = false;
  
      document.querySelectorAll('[itemscope][itemtype="https://schema.org/Product"]').forEach((productCard) => {
        // Contenedor principal
        Object.assign(productCard.style, {
          transition: 'all 0.3s ease-in-out',
          backgroundColor: '#FFFFFF',
          border: '1px solid #DDD',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '12px',
          margin: '12px',
          textAlign: 'center',
        });
  
        // Imagen
        const imageContainer = productCard.querySelector('.image-size');
        if (imageContainer) {
          Object.assign(imageContainer.style, {
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '10px',
          });
        }
  
        // Título
        const title = productCard.querySelector('.font-title');
        if (title) {
          Object.assign(title.style, {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333',
            margin: '10px 0',
          });
        }
  
        // Descripción
        const description = productCard.querySelector('p');
        if (description) {
          Object.assign(description.style, {
            fontSize: '14px',
            color: '#666',
            lineHeight: '1.5',
            marginBottom: '12px',
          });
        }
  
        // Precio
        const price = productCard.querySelector('.font-light, .lg\\:font-bold');
        if (price) {
          price.style.cssText = `
            display: inline-block;
            font-size: 18px;
            color: #fff;
            background-color: #FF5722;
            font-weight: bold;
            padding: 8px 16px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
            margin-top: 12px;
          `;
        }
  
        // Efectos de hover
        productCard.addEventListener('mouseenter', () => {
          productCard.style.transform = 'scale(1.03)';
          productCard.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        });
        productCard.addEventListener('mouseleave', () => {
          productCard.style.transform = 'scale(1)';
          productCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
  
        applied = true;
      });
  
      console.log(applied ? 'Styles applied successfully' : 'Retrying to apply styles...');
      return applied;
    };
  
    // Reintento automático cada 500 ms
    const retryInterval = setInterval(() => {
      if (applyStyles()) clearInterval(retryInterval);
    }, 500);
  
    setTimeout(() => clearInterval(retryInterval), 10000); // Detener tras 10 segundos
  });