interface Recipe {
  id: number;
  ingredients: Ingredient[];
  imgFileName: string;
  imgSrc: string;
  name: string;
  label: string;
  steps: Step[];
}

interface Ingredient {
  aquired?: boolean;
  id: number;
  name: string;
  label: string;
  quantity?: string;
  unit?: string;
}

interface Step {
  id: number;
  index: number;
  description: string;
  label: string;
}
