import { CategoriesNamesEnum } from './types/CategoriesNames.enum';
import { IAdvSlide } from './types/IAdvSlide';
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
      'https://www.mdpi.com/foods/foods-09-00051/article_deploy/html/images/foods-09-00051-g0A2.png',
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
    title: CategoriesNamesEnum.PIZZA,
    data: [
      {
        id: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
        title: 'Margherita',
        price: 29.95,
        description: 'Tomato sauce and mozzarella.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/1632ipar.png',
        isInFavorite: false,
      },
      {
        id: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q',
        title: 'Toscana',
        price: 39.95,
        oldPrice: 43.95,
        description: 'Tomato sauce, mozzarella, bacon, tomatoes and cheese.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/3724ipar.png',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8',
        title: 'Bascaiola',
        price: 39.95,
        description:
          'Tomato Sauce, 100% Mozzarella, Sausage, Onions, Sweet Corn.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/3723ipar.png',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 'd4e5f6g7-h8i9-j0k1l2-m3n4o5p6q7r8s9',
        title: "Domino's Classic",
        price: 40.95,
        description:
          'Tomato Sauce, 100% Mozzarella, Ham, Mushrooms, Black Olives.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'e5f6g7h8-i9j0-k1l2m3n4o5-p6q7r8s9t0',
        title: 'Salsiccia',
        price: 40.95,
        oldPrice: 45.95,
        description:
          'Tomato Sauce, 100% Mozzarella, Chorizo, Onions, Green Peppers.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/3726ipar.png',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 'f6g7h8i9-j0k1-l2m3n4o5p6-q7r8s9t0u1',
        title: 'Quattro Formaggi',
        price: 42.95,
        description:
          'Tomato Sauce, Mozzarella, Gorgonzola, Parmesan, and Goat Cheese.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'g7h8i9j0-k1l2-m3n4o5p6q7r8-s9t0u1v2w3x4',
        title: 'Vegetariana',
        price: 38.95,
        description:
          'Tomato Sauce, Mozzarella, Bell Peppers, Red Onions, Mushrooms, and Black Olives.',
        picture: '',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 'h8i9j0k1-l2m3-n4o5p6q7r8s9-t0u1v2w3x4y5z6',
        title: 'Capricciosa',
        price: 41.95,
        description:
          'Tomato Sauce, Mozzarella, Ham, Artichokes, Mushrooms, and Black Olives.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'i9j0k1l2-m3n4o5-p6q7r8s9t0u1-v2w3x4y5z6a1b2c3',
        title: 'Calzone',
        price: 44.95,
        description:
          'Folded Pizza with Tomato Sauce, Mozzarella, Ricotta, Ham, and Mushrooms.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'j0k1l2m3n4o5p6-q7r8s9t0u1-v2w3x4y5z6a1b2c3d4',
        title: 'Diavola',
        price: 45.95,
        description:
          'Tomato Sauce, Mozzarella, Spicy Salami, Red Chilies, and Olives.',
        picture: '',
        isInFavorite: false,
        isNew: true,
      },
    ],
  },
  {
    id: 2,
    title: CategoriesNamesEnum.SALADS,
    data: [
      {
        id: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
        title: 'Veggie',
        price: 17.95,
        oldPrice: 20.95,
        description:
          'Bollero mix salad, baby spinach, olives, tomatoes, corn, oregano, olive oil and vinegar.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/4096ipar.png',
        isInFavorite: false,
      },
      {
        id: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q',
        title: 'Caesar',
        price: 27.95,
        description:
          'Bollero mix salad, chicken, parmesan and tomatoes, seasoned with a caesar dressing.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/4094ipar.png',
        isInFavorite: false,
      },
      {
        id: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8',
        title: 'Greek',
        price: 17.95,
        description:
          'Bollero mix salad, onion, olives, green pepper, tomatoes, cheese mediterranean speciality white, basilico, olive oil and vinegar.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/4095ipar.png',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 'd4e5f6g7-h8i9-j0k1l2-m3n4o5p6q7r8s9',
        title: 'Domino’s',
        price: 27.95,
        description:
          'Bollero mix salad, fresh tomatoes, ham, cheese mediterranean speciality white, corn, oregano, olive oil and vinegar',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/4097ipar.png',
        isInFavorite: false,
      },
      {
        id: 'e5f6g7h8-i9j0-k1l2m3n4o5-p6q7r8s9t0',
        title: 'Mediterranean',
        price: 21.95,
        description:
          'Bollero mix salad, feta cheese, red onion, kalamata olives, tomatoes, and Greek dressing.',
        picture: '',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 'f6g7h8i9-j0k1-l2m3n4o5p6-q7r8s9t0u1',
        title: 'Spinach and Strawberry',
        price: 23.95,
        description:
          'Fresh spinach, sliced strawberries, feta cheese, almonds, and balsamic vinaigrette.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'g7h8i9j0-k1l2-m3n4o5p6q7r8-s9t0u1v2w3x4',
        title: 'Caprese',
        price: 22.95,
        description:
          'Fresh tomatoes, mozzarella cheese, basil, and balsamic glaze.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'h8i9j0k1-l2m3-n4o5p6q7r8s9-t0u1v2w3x4y5z6',
        title: 'Chicken Avocado',
        price: 26.95,
        description:
          'Grilled chicken, avocado, mixed greens, cherry tomatoes, and honey mustard dressing.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'i9j0k1l2-m3n4o5-p6q7r8s9t0u1-v2w3x4y5z6a1b2c3',
        title: 'Cobb',
        price: 25.95,
        description:
          'Mixed greens, grilled chicken, bacon, eggs, tomatoes, blue cheese, and ranch dressing.',
        picture: '',
        isInFavorite: false,
        isNew: true,
      },
    ],
  },
  {
    id: 3,
    title: CategoriesNamesEnum.PASTA,
    data: [
      {
        id: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
        title: 'Spaghetti Bolognese',
        price: 19.95,
        description: 'Classic Italian pasta with rich meat sauce.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/3817ipar.png',
        isInFavorite: false,
      },
      {
        id: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q',
        title: 'Alfredo Fettuccine',
        price: 22.95,
        description: 'Creamy Alfredo sauce served over fettuccine pasta.',
        picture: '',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8',
        title: 'Carbonara',
        price: 24.95,
        description: 'Pasta with eggs, cheese, bacon, and black pepper.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/3815ipar.png',
        isInFavorite: false,
      },
      {
        id: 'd4e5f6g7-h8i9-j0k1l2-m3n4o5p6q7r8s9',
        title: 'Spaghetti Bolognese',
        price: 18.95,
        description: 'Classic spaghetti with Bolognese sauce.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/3819ipar.png',
        isInFavorite: false,
      },
      {
        id: 'e5f6g7h8-i9j0-k1l2m3n4o5-p6q7r8s9t0',
        title: 'Penne Alfredo',
        price: 20.95,
        description: 'Penne pasta in creamy Alfredo sauce.',
        picture: 'https://www.dominos-pizza.ro/gallery/fmobile/3820ipar.png',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 'f6g7h8i9-j0k1-l2m3n4o5p6-q7r8s9t0u1',
        title: 'Linguine Pesto',
        price: 21.95,
        description: 'Linguine pasta with fresh basil pesto sauce.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'g7h8i9j0-k1l2-m3n4o5p6q7r8-s9t0u1v2w3x4',
        title: 'Chicken Marsala Fettuccine',
        price: 25.95,
        description:
          'Fettuccine pasta with tender chicken in Marsala wine sauce.',
        picture: '',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 'h8i9j0k1-l2m3-n4o5p6q7r8s9-t0u1v2w3x4y5z6',
        title: 'Shrimp Scampi Linguine',
        price: 28.95,
        description:
          'Linguine pasta with succulent shrimp in garlic and butter sauce.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'i9j0k1l2-m3n4o5-p6q7r8s9t0u1-v2w3x4y5z6a1b2c3',
        title: 'Vegetarian Penne',
        price: 19.95,
        description:
          'Penne pasta with a variety of fresh vegetables in tomato sauce.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'j0k1l2m3-n4o5-p6q7r8s9-t0u1v2w3x4y5z6a1b2',
        title: 'Creamy Mushroom Rigatoni',
        price: 23.95,
        description: 'Rigatoni pasta in a creamy mushroom sauce.',
        picture: '',
        isInFavorite: false,
        isNew: true,
      },
    ],
  },
  {
    id: 4,
    title: CategoriesNamesEnum.BURGER,
    data: [
      {
        id: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
        title: 'Classic Cheeseburger',
        price: 14.95,
        description: 'Juicy beef patty with melted cheese and fresh veggies.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q',
        title: 'Veggie Burger',
        price: 12.95,
        description: 'Plant-based patty with lettuce, tomato, and vegan mayo.',
        picture: '',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8',
        title: 'Bacon Deluxe',
        price: 16.95,
        description:
          'Deluxe burger with crispy bacon, cheddar cheese, and special sauce.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'd4e5f6g7-h8i9-j0k1l2-m3n4o5p6q7r8s9',
        title: 'Spicy Jalapeno Burger',
        price: 15.95,
        description:
          'Spicy burger topped with jalapenos, pepper jack cheese, and chipotle mayo.',
        picture: '',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 'e5f6g7h8-i9j0-k1l2m3n4o5-p6q7r8s9t0',
        title: 'Mushroom Swiss Burger',
        price: 17.95,
        description:
          'Burger with sautéed mushrooms, Swiss cheese, and truffle aioli.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'f6g7h8i9-j0k1-l2m3n4o5p6-q7r8s9t0u1',
        title: 'BBQ Ranch Burger',
        price: 18.95,
        description:
          'Burger smothered in BBQ sauce, ranch dressing, and crispy onion straws.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'g7h8i9j0-k1l2-m3n4o5p6q7r8-s9t0u1v2w3x4',
        title: 'Double Bacon Cheeseburger',
        price: 20.95,
        description:
          'Double patty burger with bacon, American cheese, and pickles.',
        picture: '',
        isInFavorite: false,
        isNew: true,
      },
      {
        id: 'h8i9j0k1-l2m3-n4o5p6q7r8s9-t0u1v2w3x4y5z6',
        title: 'Avocado Turkey Burger',
        price: 16.95,
        description: 'Turkey burger with avocado, lettuce, and cranberry mayo.',
        picture: '',
        isInFavorite: false,
      },
      {
        id: 'i9j0k1l2-m3n4o5-p6q7r8s9t0u1-v2w3x4y5z6a1b2c3',
        title: 'Blue Cheese Burger',
        price: 19.95,
        description:
          'Burger with tangy blue cheese, caramelized onions, and arugula.',
        picture: '',
        isInFavorite: false,
        isNew: true,
      },
    ],
  },
];
