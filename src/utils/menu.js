const menu = [
  {
    id: 1,
    type: 'pizza',
    name: 'Cheeze with tomato',
    description: 'Mozzarella cheese with tomato',
    price: '6.50',
  },
  {
    id: 2,
    type: 'pizza',
    name: 'Seafood',
    description: 'Prawn, tuna & herbs',
    price: '8.50',
  },
  {
    id: 3,
    type: 'pizza',
    name: 'Mushroom Garlic',
    description:
      'Olive Oil, Calabrian chiles, seasonal mushrooms, roasted garlic, fontina, ricotta',
    price: '6.50',
  },
  {
    id: 4,
    type: 'pizza',
    name: 'BBQ Chicken',
    description:
      'BBQ Sauce, Braised Chicken, Cheddar Blend, Jalapeño, Pickled Onions',
    price: '9.00',
  },
  {
    id: 5,
    type: 'pizza',
    name: 'Margherita',
    description: 'Tomato sauce, fresh Mozzarella, fresh basil',
    price: '5.50',
  },
  {
    id: 6,
    type: 'pizza',
    name: 'Sausage',
    description:
      'Tomato sauce, house-made sausage, pickled onions, fontina, ricotta',
    price: '8.50',
  },
  {
    id: 7,
    type: 'pizza',
    name: 'Pepperoni',
    description: 'Tomato sauce, Mozzarella',
    price: '7.50',
  },
  {
    id: 8,
    type: 'pasta',
    name: 'Fettuccine Alfredo',
    description: 'Fettuccine noodles smothered in our homemade alfredo sauce.',
    price: '14.95',
  },
  {
    id: 9,
    type: 'pasta',
    name: 'Chicken Fettuccine',
    description:
      'Tender chicken and roasted red peppers in creamy Alfredo sauce.',
    price: '15.95',
  },
  {
    id: 10,
    type: 'pasta',
    name: 'Salmon Fettuccine',
    description:
      'Fettuccine pasta with smoked salmon and capers in Alfredo sauce.',
    price: '15.95',
  },
  {
    id: 11,
    type: 'pasta',
    name: 'Linguine Di Zucca',
    description:
      'Linguine noodles, zucchini, broccoli, onions, garlic and fresh basil, sauteed in olives oil and topped with parmesan cheese.',
    price: '14.95',
  },
  {
    id: 12,
    type: 'pasta',
    name: 'Puttanesca Pasta',
    description:
      'Cheese filled tortellini, Greek olives, artichoke hearts, capers, parmesan cheese, feta cheese and pesto with our homemade marinara',
    price: '15.95',
  },
  {
    id: 13,
    type: 'dessert',
    name: 'Tiramisu',
    description:
      'A classic rendition of traditional tiramisu with tons of cream & espresso.',
    price: '6.95',
  },
  {
    id: 14,
    type: 'dessert',
    name: 'Chocolate Caramel Cake',
    description: 'A delicious combination of chocolate cake & caramel.',
    price: '6.95',
  },
  {
    id: 15,
    type: 'dessert',
    name: 'New York Cheesecake',
    description: 'A delicious combination of chocolate cake & caramel.',
    price: '6.95',
  },
  {
    id: 16,
    type: 'dessert',
    name: 'Baklava',
    description: 'Walnut strudel, layered with walnuts, honey & cinnamon.',
    price: '6.95',
  },
  {
    id: 17,
    type: 'dessert',
    name: 'Chocolate Cannoli',
    description:
      'Tube shaped shell of pastry dough, filled with a delicious creamy filling.',
    price: '6.95',
  },
  {
    id: 18,
    type: 'drink',
    name: 'soda',
    description: 'Nothing like a cold soda to go with your pizza.',
    price: '1.99',
  },

  {
    id: 19,
    type: 'drink',
    name: 'Juice',
    description: 'apple, orange.',
    price: '1.99',
  },
  {
    id: 20,
    type: 'drink',
    name: 'San Pellegrino',
    description: 'great taste',
    price: '1.99',
  },
  {
    id: 21,
    type: 'beer',
    name: 'Guiness',
    description: 'stout',
    price: '4.99',
  },
  {
    id: 22,
    type: 'beer',
    name: 'Kozel',
    description: 'extra lager',
    price: '2.99',
  },
  {
    id: 23,
    type: 'beer',
    name: 'Spaten',
    description: 'extra lager',
    price: '3.99',
  },
  {
    id: 24,
    type: 'beer',
    name: 'Miller',
    description: 'light lager',
    price: '3.99',
  },
  {
    id: 25,
    type: 'sandwich',
    name: 'Tender chicken breast, marinara sauce, red onions, parmesan & mozzarella cheese on french bread.',
    description: 'light lager',
    price: '3.99',
  },
  {
    id: 26,
    type: 'sandwich',
    name: 'Mediterranean Special Sandwich',
    description:
      'Eggplant, artichoke hearts, garlic, tomatoes, mozzarella and goat cheese with homemade Italian dressing.',
    price: '3.99',
  },
  {
    id: 27,
    type: 'sandwich',
    name: 'BBQ Chicken Sandwich',
    description:
      'Tender chicken breast baked in our special BBQ sauce with mozzarella cheese on french bread.',
    price: '3.99',
  },
  {
    id: 28,
    type: 'sandwich',
    name: 'Caesar Sub Sandwich',
    description:
      'Tender chicken, roasted red peppers, red onions, mushrooms and goat cheese with caesar dressing on french bread.',
    price: '3.99',
  },
  {
    id: 29,
    type: 'sandwich',
    name: 'Gyro Sandwich',
    description:
      'Seasoned beef or chicken, tomatoes, onions and feta cheese in pita bread, smothered with our homemade tzatziki sauce.',
    price: '3.99',
  },
  {
    id: 30,
    type: 'sandwich',
    name: 'Pesto Chicken Sandwich',
    description:
      'Tender chicken breast, pesto sauce, roasted red peppers, parmesan and mozzarella cheese on french bread.',
    price: '3.99',
  },
  {
    id: 31,
    type: 'soup',
    name: 'Dungeness Crab Dip',
    description:
      'Havarti, roasted garlic, fresh spinach, Walla Walla sweet onions.',
    price: '19.99',
  },
  {
    id: 32,
    type: 'soup',
    name: 'Award Winning Clam Chowder',
    description:
      'All natural, New England style with nitrite-free bacon, creamy and herby',
    price: '19.99',
  },
  {
    id: 33,
    type: 'soup',
    name: 'Lobster Mobster Pernod Chowder',
    description:
      'Grand Duchess of all Chowders with sustainable Argentinean Red Shrimp, sweet potatoes',
    price: '19.99',
  },
]
export default menu
