import Category from '../models/category';
import Tenis from '../models/Tenis';

export const CATEGORIES = [
  new Category('c1', 'Jordan1', '#FF0000'),
  new Category('c2', 'Yezzy Slide', '#00FFF0'),
  new Category('c3', 'Yezzy 350', '#ECFF04'),
  new Category('c4', 'Jordan 4', '#FFFFFF'),
];

export const TENIS = [
  new Tenis(
    'm1',
    ['c1', 'c4'],
    'Jordan 1',
    'affordable',
    'simple',
    'https://thecave.mx/cdn/shop/products/Jordan1HighUniversityBlue1.thecavemx_720x.png?v=1679521352',
    15,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),

  new Tenis(
    'm2',
    ['c2','c3'],
    'Yezzy Slide',
    'affordable',
    'simple',
    'https://m.media-amazon.com/images/I/41SySD3IYrL._AC_SX500_.jpg',
    15,
   
   
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),

  new Tenis(
    'm3',
    ['c2','c3'],
    'Yezzy 350',
    'pricey',
    'simple',
    'https://m.media-amazon.com/images/I/71sZOkbzhOL._AC_SX500_.jpg',
    45,
    [
      '300g Cattle Hack',
      '1 Tomato',
      '1 Cucumber',
      '1 Onion',
      'Ketchup',
      '2 Burger Buns'
    ],
    [
      'Form 2 patties',
      'Fry the patties for c. 4 minutes on each side',
      'Quickly fry the buns for c. 1 minute on each side',
      'Bruch buns with ketchup',
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),

  new Tenis(
    'm4',
    ['c1','c4'],
    'Jordan 4',
    'luxurious',
    'challenging',
    'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/73682086-2e6b-4ce1-b2be-ce0f97a27442/fecha-de-lanzamiento-de-los-air-jordan-4-industrial-blue-fv5029-141.jpg',
    60,
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      '100g Vegetable Oil',
      'Salt',
      'Lemon Slices'
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false
  )
];