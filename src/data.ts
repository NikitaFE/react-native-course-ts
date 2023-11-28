import { IProductCategory } from './types/IProductCategory';

export const mockedProducts: IProductCategory[] = [
  {
    id: 1,
    title: 'Pizza',
    data: [
      {
        id: 1,
        title: 'Margherita',
        price: 29.95,
        description: 'Tomato sauce and mozzarella.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/1632ipar.png',
        isInFavorite: false,
      },
      {
        id: 2,
        title: 'Toscana',
        price: 39.95,
        oldPrice: 43.95,
        description: 'Tomato sauce, mozzarella, bacon, tomatoes and cheese.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/3724ipar.png',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 3,
        title: 'Bascaiola',
        price: 39.95,
        description:
          'Tomato Sauce, 100% Mozzarella, Sausage, Onions, Sweet Corn.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/3723ipar.png',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 4,
        title: "Domino's Classic",
        price: 40.95,
        description:
          'Tomato Sauce, 100% Mozzarella, Ham, Mushrooms, Black Olives.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 5,
        title: 'Salsiccia',
        price: 40.95,
        oldPrice: 45.95,
        description:
          'Tomato Sauce, 100% Mozzarella, Chorizo, Onions, Green Peppers.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/3726ipar.png',
        isInFavorite: false,
        isNew: true,
      },
    ],
  },
  {
    id: 2,
    title: 'Salads',
    data: [
      {
        id: 1,
        title: 'Veggie',
        price: 17.95,
        oldPrice: 20.95,
        description:
          'Bollero mix salad, baby spinach, olives, tomatoes, corn, oregano, olive oil and vinegar.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/4096ipar.png',
        isInFavorite: false,
      },
      {
        id: 2,
        title: 'Caesar',
        price: 27.95,
        description:
          'Bollero mix salad, chicken, parmesan and tomatoes, seasoned with a caesar dressing.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/4094ipar.png',
        isInFavorite: false,
      },
      {
        id: 3,
        title: 'Greek',
        price: 17.95,
        description:
          'Bollero mix salad, onion, olives, green pepper, tomatoes, cheese mediterranean speciality white, basilico, olive oil and vinegar.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/4095ipar.png',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 4,
        title: 'Domino’s',
        price: 27.95,
        description:
          'Bollero mix salad, fresh tomatoes, ham, cheese mediterranean speciality white, corn, oregano, olive oil and vinegar',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/4097ipar.png',
        isInFavorite: false,
      },
    ],
  },
];
