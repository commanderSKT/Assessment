const products = {
    men: [
        { title: 'Shirt', vendor: 'Virat', price: 100, compareAtPrice: 120, badge: 'New', image: 'download.jpg' },
        { title: 'Shirt', vendor: 'Fassion', price: 50, compareAtPrice: 60, badge: 'Hot', image: 'download2.jpg'},
        { title: 'Shirt', vendor: 'Kumar', price: 80, compareAtPrice: 100, badge: 'Sale', image: 'download1.jpg' },
        { title: 'Shirt', vendor: 'vikiash', price: 120, compareAtPrice: 150, badge: 'New', image: 'download4.jpg' },
    ],
    women: [
        // Women's products
        { title: 'Shirt', vendor: 'Virat', price: 100, compareAtPrice: 120, badge: 'New', image: 'download.jpg' },
        { title: 'Shirt', vendor: 'Kumar', price: 80, compareAtPrice: 100, badge: 'Sale', image: 'download1.jpg' },
        { title: 'Shirt', vendor: 'vikiash', price: 120, compareAtPrice: 150, badge: 'New', image: 'download4.jpg' },
        { title: 'Shirt', vendor: 'Fassion', price: 50, compareAtPrice: 60, badge: 'Hot', image: 'download2.jpg'},
    ],
    kids: [
        // Kids' products
        { title: 'Shirt', vendor: 'Fassion', price: 50, compareAtPrice: 60, badge: 'Hot', image: 'download2.jpg'},
        { title: 'Shirt', vendor: 'Virat', price: 100, compareAtPrice: 120, badge: 'New', image: 'download.jpg' },
        { title: 'Shirt', vendor: 'vikiash', price: 120, compareAtPrice: 150, badge: 'New', image: 'download4.jpg' },
        { title: 'Shirt', vendor: 'Kumar', price: 80, compareAtPrice: 100, badge: 'Sale', image: 'download1.jpg' },

        
    ]
};

function showProducts(category) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Clear previous content

    products[category].forEach(product => {
        const discount = Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100);

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <span class="badge">${product.badge}</span>
            <h3>${product.title}</h3>
            <p>Vendor: ${product.vendor}</p>
            <p>Price: $${product.price}</p>
            <p>Compare at Price: $${product.compareAtPrice}</p>
            <p>Discount: ${discount}% off</p>
            <button>Add to Cart</button>
        `;

        productContainer.appendChild(productCard);
    });
}