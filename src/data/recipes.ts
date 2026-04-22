import type { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: 'mocca',
    name: 'Café Mocca',
    description: 'A rich and chocolatey coffee made in the traditional moccha pot style.',
    method: 'mocca',
    coffeeAmount: 20,
    waterAmount: 30, // 1:1.5 ratio
    waterTemp: 90,
    grindSize: 'fine',
    totalTime: 240,
    difficulty: 'medium',
    stages: [
      { name: 'Add Water', duration: 10, description: 'Fill the pot with hot water' },
      { name: 'Add Coffee', duration: 10, description: 'Add finely ground coffee to the filter' },
      { name: 'Heat', duration: 180, description: 'Place on heat and wait for it to bubble' },
      { name: 'Serve', duration: 40, description: 'Remove from heat and serve immediately' },
    ],
    ratio: 1.5, // water:coffee ratio
  },
  {
    id: 'french-press',
    name: 'Prensa Francesa',
    description: 'Full-bodied coffee with rich oils and bold flavor.',
    method: 'french-press',
    coffeeAmount: 30,
    waterAmount: 450, // 1:15 ratio
    waterTemp: 95,
    grindSize: 'coarse',
    totalTime: 270,
    difficulty: 'easy',
    stages: [
      { name: 'Add Coffee', duration: 15, description: 'Add coarsely ground coffee to the press' },
      { name: 'Add Water', duration: 15, description: 'Pour hot water over the grounds' },
      { name: 'Steep', duration: 210, description: 'Let it steep without stirring' },
      { name: 'Press', duration: 30, description: 'Slowly press down the plunger' },
    ],
    ratio: 15, // water:coffee ratio
  },
  {
    id: 'chocolate',
    name: 'Chocolate Coffee',
    description: 'A sweet and indulgent chocolate-infused coffee experience.',
    method: 'chocolate',
    coffeeAmount: 18,
    waterAmount: 150,
    waterTemp: 85,
    grindSize: 'medium',
    totalTime: 300,
    difficulty: 'hard',
    stages: [
      { name: 'Prepare', duration: 20, description: 'Grind chocolate and coffee together' },
      { name: 'Bloom', duration: 30, description: 'Add a small amount of water and let it bloom' },
      { name: 'Pour', duration: 120, description: 'Slowly pour remaining water in circles' },
      { name: 'Finish', duration: 130, description: 'Let it rest and develop flavors' },
    ],
    milkAmount: 100, // ml of milk for dilution
    density: 'rich', // chocolate density level
    ratio: 8.3, // water:coffee ratio (150ml water / 18g coffee)
  },
];
