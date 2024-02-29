const products = [
  {
    id: "1",
    name: "Tomo de Strahd",
    img: "url-img",
    price: 999,
    category: "items magicos",
    description: "Info sobre Strahd",
    stock: 1,
  },
  {
    id: "2",
    name: "Bastón de Gulthias",
    img: "url-img",
    price: 15,
    category: "items magicos",
    description: "Cetro Vampírico",
    stock: 12,
  },
  {
    id: "3",
    name: "ArruinaViejas",
    img: "url-img",
    price: 120,
    category: "items magicos",
    description: "Espada encantada",
    stock: 4,
  },
  {
    id: "4",
    name: "Lanza de Khavan",
    img: "url-img",
    price: 60,
    category: "items magicos",
    description: "Lanza bárbara",
    stock: 2,
  },
  {
    id: "5",
    name: "Poción de curación",
    img: "url-img",
    price: 50,
    category: "curativos",
    description: "Cura 2d8",
    stock: 16,
  },
  {
    id: "6",
    name: "Poción de disminución",
    img: "url-img",
    price: 50,
    category: "curativos",
    description: "Te hace más pequeño",
    stock: 23,
  },
  {
    id: "7",
    name: "Tónico acelerador",
    img: "url-img",
    price: 50,
    category: "curativos",
    description: "Super velocidad",
    stock: 11,
  },
  {
    id: "8",
    name: "Anillo del Invierno",
    img: "url-img",
    price: 2100,
    category: "items magicos",
    description: "Defensa al frío",
    stock: 2,
  },
  {
    id: "9",
    name: "Icono de Ravenkind",
    img: "url-img",
    price: 1000,
    category: "items magicos",
    description: "Estatuilla religiosa",
    stock: 3,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};
