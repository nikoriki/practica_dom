const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
  },
  {
    name: 'TV LG NanoCell 43" 43NANO UltraHD 4K WebOS AI ThinQ + PcCom Essential HDMI 2.0 30AWG CCS',
    price: 299,
    stars: 4.5,
    reviews: 206,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1087/10874441/1431-tv-lg-nanocell-43-43nano-ultrahd-4k-webos-ai-thinq-pccom-hdmi-20-30awg-ccs.jpg'
  },
  {
    name: 'Tarjeta Gráfica Gigabyte GeForce RTX 5070 WINDFORCE SFF 12GB GDDR7 Reflex 2 RTX AI DLSS4',
    price: 624.95,
    stars: 4.2,
    reviews: 12,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1087/10875434/1539-gigabyte-geforce-rtx-5070-windforce-sff-12gb-gddr7-reflex-2-rtx-ai-dlss4.jpg'
  },
  {
    name: 'Portátil HP 15-fc0091ns AMD Ryzen 5 7520U/16GB/1TB SSD/15.6"',
    price: 529,
    stars: 4.6,
    reviews: 1360,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1073/10733264/184-hp-15-fc0091ns-amd-ryzen-5-7520u-16gb-1tb-ssd-156.jpg'
  },
  {
    name: 'Samsung Galaxy A25 5G 256GB Azul Libre',
    price: 229,
    stars: 4.4,
    reviews: 1541,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1081/10812625/1303-samsung-galaxy-a25-5g-8-256gb-azul-libre.jpg'
  },
  {
    name: 'Tablet Xiaomi Pad 6 11" 6/128GB Azul Bruma',
    price: 249.99,
    stars: 4.7,
    reviews: 277,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1074/10745507/1563-xiaomi-pad-6-11-6-128gb-azul-bruma.jpg'
  },
  {
    name: 'Procesador AMD Ryzen 5 7600X 4.7 GHz Box sin Ventilador',
    price: 205.99,
    stars: 4.8,
    reviews: 1026,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1057/10570001/1881-amd-ryzen-5-7600x-47-ghz-box-sin-ventilador-comprar.jpg'
  },
  {
    name: 'Monitor Samsung S27D302GAU 27" LED IPS FullHD 100Hz',
    price: 95,
    stars: 4.6,
    reviews: 772,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1085/10856496/1357-samsung-s27d302gau-27-led-ips-fullhd-100hz.jpg'
  },
  {
    name: 'Disco Duro Forgeon Nimbus PRO Disco SSD 2TB 7400MB/S NVMe PCIe 4.0 M.2 Gen4',
    price: 125.99,
    stars: 4.7,
    reviews: 159,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1084/10845356/1587-forgeon-nimbus-pro-ssd-m2-2tb-nvme-pcie-40-gen4-7400.jpg'
  },
  {
    name: 'Tempest Barbarian Auriculares Gaming RGB 7.1 PC/PS4/PS5',
    price: 27.99,
    stars: 4.6,
    reviews: 1444,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/25/253099/tempest-ghs301-barbarian-auriculares-gaming-71-rgb-pc-ps4-45521ba6-a86a-476c-b41c-b745ed768f49.jpg'
  },
  {
    name: 'Ordenador Sobremesa PcCom Ready AMD Ryzen 7 5800X / 32GB / 2TB SSD / RTX 4060 Ti + Windows 11 Home',
    price: 1429,
    stars: 4.7,
    reviews: 1041,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1086/10867134/1853-pccom-ready-amd-ryzen-7-5800x-32gb-2tb-ssd-rtx-4060-ti-windows-11-home.jpg'
  }
];

const productGallery = document.querySelector('.product-gallery');

products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Precio: €${product.price}</p>
    <p>⭐ ${product.stars} (${product.reviews} reseñas)</p>
    <p>Vendido por: ${product.seller}</p>
  `;

  productGallery.appendChild(productCard);
});