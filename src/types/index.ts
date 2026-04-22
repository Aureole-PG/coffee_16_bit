export interface BrewStage {
  name: string;
  duration: number; // in seconds
  description: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  method: 'mocca' | 'french-press' | 'chocolate';
  coffeeAmount: number; // in grams
  waterAmount: number; // in ml
  waterTemp: number; // in celsius
  grindSize: 'fine' | 'medium' | 'coarse';
  totalTime: number; // in seconds
  stages: BrewStage[];
  difficulty: 'easy' | 'medium' | 'hard';
  // Chocolate-specific options
  milkAmount?: number; // in ml for chocolate method
  density?: 'light' | 'medium' | 'rich'; // chocolate density
  ratio?: number; // water:coffee ratio (e.g., 15 for 1:15)
}
