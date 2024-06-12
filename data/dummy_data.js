import Category from '../models/category';
import Tenis from '../models/Tenis';

export const CATEGORIES = [
  new Category('c1', 'Jordan', '#FF0000'),
  new Category('c3', 'Yezzy ', '#00FFF0'),
  new Category('c5', 'Adidas', '#ECFF04'),
  new Category('c7', 'New Balances', '#FFFFFF'),
  
  
];

export const TENIS = [
  new Tenis(
    'm1',
    ['c1','c2'],
    'Jordan 1',
    'Los Jordan 1 son uno de los modelos más icónicos y populares de la marca Nike, lanzados por primera vez en 1985. Diseñados por Peter Moore, revolucionaron la industria del calzado deportivo al ser los primeros zapatos de baloncesto en llevar el logotipo de Michael Jordan, quien en ese entonces estaba emergiendo como una estrella en la NBA.',
    '',
    'https://thecave.mx/cdn/shop/products/Jordan1HighUniversityBlue1.thecavemx_720x.png?v=1679521352',
    
    [
      '',
      '',
      '',
      '',
      '',
      ''
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
    ['c1','c2'],
    'Jordan 4',
    '',
    'Los Air Jordan 4 son uno de los modelos más icónicos de la línea Air Jordan de Nike. Fueron lanzados en 1989 y diseñados por Tinker Hatfield, quien también diseñó los Air Jordan 3. Este modelo es conocido por su combinación de estilo, innovación y rendimiento en la cancha.',
    'https://th.bing.com/th/id/OIP.Bl9ItZZLtK-sAAL-LSJjbQHaHa?rs=1&pid=ImgDetMain',
    
    
    false,
    true,
    true,
    true
  ),







  new Tenis(
    'm3',
    ['c3','c4'],
    'Yezzy 700',
    'Los Yeezy 700 son una línea de zapatillas deportivas de alto rendimiento diseñadas por Kanye West en colaboración con Adidas. Desde su lanzamiento, han sido un fenómeno en el mundo de la moda y el calzado deportivo. Aquí hay una breve historia de los Yeezy 700:',
    '',
    'https://i.pinimg.com/564x/4b/29/f8/4b29f87425b635292d399cc229a873bb.jpg',
    
   
   
    [
      '',
      '',
      '',
      '',
      ''
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
    'm4',
    ['c3','c4'],
    'Yezzy Foam Runner',
    'A pesar de sus críticas iniciales por su aspecto poco convencional, las Yeezy Foam Runner ganaron popularidad rápidamente. Muchas celebridades y figuras influyentes de la moda fueron vistas usando el calzado, lo que ayudó a aumentar su atractivo y a consolidarlo como un artículo codiciado.',
    '',
    'https://i.pinimg.com/736x/cb/b0/c3/cbb0c31517322ccad005c6e316ed76ef.jpg',
    
   
   
   
    
    false,
    false,
    false,
    false
  ),










  new Tenis(
    'm5',
    ['c5','c6'],
    'Adidas Forum',
    'Desde su lanzamiento, los Adidas Forum se ganaron la reputación de ser uno de los mejores zapatos de baloncesto disponibles en el mercado. Fueron usados por numerosos jugadores profesionales en la NBA y en otras ligas de baloncesto de todo el mundo.',
    '',
    'https://i.pinimg.com/736x/7f/91/2b/7f912bd6ac83ef93783180f18fb48064.jpg',
    
    [
      'Tienen Un Precio de $2600 pesos',
      
      
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
    'm6',
    ['c5','c6'],
    'Adidas Ozwemgo',
    'Hoy en día, las Adidas Ozweego siguen siendo una opción popular entre los aficionados de la moda urbana y los entusiastas del calzado deportivo que aprecian su diseño distintivo y su conexión con la nostalgia de los años 90. Su resurgimiento es un testimonio de la capacidad de las marcas para revitalizar y reinventar sus productos para nuevas generaciones de consumidores.',
    '',
    'https://i.pinimg.com/736x/fb/c0/cf/fbc0cf147bd0cb9e1ca2e21016c07069.jpg',
    
    [
      ,
      'Tienen Un Precio de $3000 Pesos',
      
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
    'm7',
    ['c7','c8'],
    'New Balances',
    'pricey',
    'Durante los años 80 y 90, los New Balance 550 ganaron popularidad como una opción confiable entre los jugadores de baloncesto debido a su rendimiento sólido y su durabilidad. Fueron usados por numerosos jugadores profesionales en la NBA y en otras ligas de baloncesto de todo el mundo.',
    'https://sneakernews.com/wp-content/uploads/2021/08/new-balance-550-bb550hl1-white-carolina-blue-release-date-1.jpg?w=1140',
    
    [
      '',
      '',
      '',
      '',
      '',
      ''
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
    'm7',
    ['c7','c8'],
    'New Balances Ml827',
    'En resumen, el New Balance ML827 es un modelo emblemático que ha dejado una marca duradera en la historia de la marca. Su combinación de rendimiento, comodidad y estilo lo convierte en una opción popular tanto para corredores como para aquellos que buscan una estética retro en su calzado',

    '',
    'https://i.pinimg.com/564x/ee/7c/ed/ee7cedf8b7f52724cb752e9838c86da3.jpg',
    
    [
      'Tiene Un Precio de $2000 pesos',
      '',
      '',
      '',
      '',
      ''
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

  
];