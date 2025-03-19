// Fetch the bikes data
fetch('../bikes-data.json')
  .then(response => response.json())
  .then(bikes => {
    const grillSection = document.querySelector('.grill');
    
    // grillSection.innerHTML = '';
    
    // Create bike cards from JSON data
    bikes.forEach(bike => {
      const bikeCard = document.createElement('div');
      bikeCard.className = 'bike-card';
      
      // Create the image container with discount badge
      const imageContainer = document.createElement('div');
      imageContainer.style.position = 'relative';
      
      const img = document.createElement('img');
      img.src = bike.image;
      img.alt = bike.productTitle;
      img.className = 'product-image';
      
      const discountBadge = document.createElement('div');
      discountBadge.className = 'discount-badge';
      discountBadge.textContent = bike.discount;
      
      imageContainer.appendChild(img);
      imageContainer.appendChild(discountBadge);
      
      // Create product title
      const title = document.createElement('h3');
      title.className = 'product-title';
      title.textContent = bike.productTitle;
      
      // Create size selector
      const sizeSelector = document.createElement('div');
      sizeSelector.className = 'size-selector';
      
      bike.sizes.forEach(sizeItem => {
        const sizeOption = document.createElement('div');
        sizeOption.className = `size-option ${sizeItem.status}`;
        sizeOption.textContent = sizeItem.size;
        sizeSelector.appendChild(sizeOption);
      });
      
      // Create price container
      const priceContainer = document.createElement('div');
      priceContainer.className = 'price-container';
      
      const currentPrice = document.createElement('span');
      currentPrice.className = 'current-price';
      currentPrice.textContent = bike.currentPrice;
      
      const originalPrice = document.createElement('span');
      originalPrice.className = 'original-price';
      originalPrice.textContent = bike.originalPrice;
      
      const monthlyPrice = document.createElement('div');
      monthlyPrice.className = 'monthly-price';
      monthlyPrice.textContent = `or from ${bike.monthlyPrice}/month`;
      
      // Create bike specs
      const bikeSpecs = document.createElement('div');
      bikeSpecs.className = 'bike-specs';
      
      bike.bikeSpecs.forEach(spec => {
        const specSpan = document.createElement('span');
        specSpan.textContent = spec;
        bikeSpecs.appendChild(specSpan);
      });
      
      // Append all elements to price container
      priceContainer.appendChild(currentPrice);
      priceContainer.appendChild(originalPrice);
      priceContainer.appendChild(monthlyPrice);
      priceContainer.appendChild(bikeSpecs);
      
      // Append all elements to bike card
      bikeCard.appendChild(imageContainer);
      bikeCard.appendChild(title);
      bikeCard.appendChild(sizeSelector);
      bikeCard.appendChild(priceContainer);
      
      // Make the card clickable by wrapping it in an anchor tag
      const cardLink = document.createElement('a');
      cardLink.href = 'productpage.html';
      cardLink.className = 'clickable';
      cardLink.appendChild(bikeCard);
      
      // Add the complete card to the grill section
      grillSection.appendChild(cardLink);
    });
  })
  .catch(error => console.error('Error loading bike data:', error));