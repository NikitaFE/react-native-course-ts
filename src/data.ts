import { IAdvSlide } from './types/IAdvSlide';
import { IProduct } from './types/IProduct';
import { IProductCategory } from './types/IProductCategory';

export const mockedSlides: IAdvSlide[] = [
  {
    id: '1',
    image:
      'https://newspaperads.ads2publish.com/wp-content/uploads/2019/03/oven-story-pizza-the-pizza-is-next-level-cheese-ad-times-of-india-bangalore-23-02-2019.png',
    link: 'https://www.mcdonalds.com/ua/uk-ua.html',
  },
  {
    id: '2',
    image:
      'https://cdn3.vectorstock.com/i/1000x1000/43/52/pizza-ads-poster-sliced-delicious-tasty-vector-30234352.jpg',
    link: 'https://www.mcdonalds.com/ua/uk-ua.html',
  },
  {
    id: '3',
    image:
      'https://as2.ftcdn.net/v2/jpg/03/52/15/11/1000_F_352151190_X5BtAe9Cf97qTFI5ipNDDL3VFV1xYyow.jpg',
    link: 'https://www.mcdonalds.com/ua/uk-ua.html',
  },
  {
    id: '4',
    image:
      'https://i.pinimg.com/originals/f3/ce/5a/f3ce5a25df493ef043ecbeffab69d7d9.png',
    link: 'https://www.mcdonalds.com/ua/uk-ua.html',
  },
];

export const mockedProducts: IProductCategory[] = [
  {
    id: 1,
    title: 'Pizza',
    data: [
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

export const additionalMockedProducts: IProductCategory[] = [
  {
    id: 3,
    title: 'Pasta',
    data: [
      {
        id: 1,
        title: 'Spaghetti Bolognese',
        price: 19.95,
        description: 'Classic Italian pasta with rich meat sauce.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/3817ipar.png',
        isInFavorite: false,
      },
      {
        id: 2,
        title: 'Alfredo Fettuccine',
        price: 22.95,
        description: 'Creamy Alfredo sauce served over fettuccine pasta.',
        picture: '',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 3,
        title: 'Carbonara',
        price: 24.95,
        description: 'Pasta with eggs, cheese, bacon, and black pepper.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/3815ipar.png',
        isInFavorite: false,
      },
      {
        id: 4,
        title: 'Spaghetti Bolognese',
        price: 18.95,
        description: 'Classic spaghetti with Bolognese sauce.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/3819ipar.png',
        isInFavorite: false,
      },
      {
        id: 5,
        title: 'Penne Alfredo',
        price: 20.95,
        description: 'Penne pasta in creamy Alfredo sauce.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/3820ipar.png',
        isInFavorite: false,
        isNew: true,
      },
    ],
  },
  {
    id: 4,
    title: 'Burgers',
    data: [
      {
        id: 1,
        title: 'Classic Cheeseburger',
        price: 14.95,
        description: 'Juicy beef patty with melted cheese and fresh veggies.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 2,
        title: 'Veggie Burger',
        price: 12.95,
        description: 'Plant-based patty with lettuce, tomato, and vegan mayo.',
        picture: '',
        isInFavorite: false,
        isNew: true,
      },
    ],
  },
];

export const mockedPizza: IProduct = {
  id: 1,
  title: 'Margherita',
  price: 29.95,
  description: 'Tomato sauce and mozzarella.',
  picture: 'https://www.dominos-pizza.ro/gallery/fmobile/1632ipar.png',
  isInFavorite: false,
};
