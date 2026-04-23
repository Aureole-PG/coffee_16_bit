import { useState, useEffect } from 'preact/hooks';

interface Props {
  defaultCoffee?: number;
  defaultWater?: number;
  recipeRatio?: number;
  baseServings?: number;
}

const SERVING_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const subtitleClass =
  'font-sans font-black uppercase tracking-wide leading-tight text-soft-petal';
const infoClass =
  'font-pixel font-black tracking-wide leading-snug text-vivid-rose';

const fieldClass =
  'w-full bg-deep-earth border-2 border-dusty-rose px-3 py-2 font-pixel text-vivid-rose text-lg focus:outline-none focus:border-vivid-rose transition-colors';

export default function PortionCalculator({
  defaultCoffee = 20,
  defaultWater = 200,
  recipeRatio = 16,
  baseServings = 1,
}: Props) {
  const [servings, setServings] = useState(baseServings);
  const [coffee, setCoffee] = useState(defaultCoffee);
  const [water, setWater] = useState(defaultWater);

  const calculateRatio = () => {
    if (coffee > 0) return water / coffee;
    return recipeRatio;
  };

  const calculateValues = (newServings: number) => {
    const calculatedCoffee = defaultCoffee * newServings;
    const calculatedWater = Math.round(defaultCoffee * recipeRatio * newServings);
    setCoffee(calculatedCoffee);
    setWater(calculatedWater);
  };

  const handleServingsChange = (e: Event) => {
    const value = parseInt((e.target as HTMLSelectElement).value);
    setServings(value);
    calculateValues(value);
  };

  const handleCoffeeChange = (e: Event) => {
    const value = parseInt((e.target as HTMLInputElement).value) || 0;
    setCoffee(value);
    setWater(Math.round(value * recipeRatio));
  };

  const handleWaterChange = (e: Event) => {
    const value = parseInt((e.target as HTMLInputElement).value) || 0;
    setWater(value);
    setCoffee(Math.round(value / recipeRatio));
  };

  useEffect(() => {
    calculateValues(servings);
  }, [recipeRatio]);

  return (
    <div class="w-full space-y-4">
      <div class="space-y-1">
        <label class={`${subtitleClass} text-md block`}>Servings</label>
        <select
          value={servings}
          onChange={handleServingsChange}
          class={fieldClass}
        >
          {SERVING_OPTIONS.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="space-y-1">
          <label class={`${subtitleClass} text-md block`}>Coffee (g)</label>
          <input
            type="number"
            value={coffee}
            onInput={handleCoffeeChange}
            class={fieldClass}
            min="1"
          />
        </div>
        <div class="space-y-1">
          <label class={`${subtitleClass} text-md block`}>Water (ml)</label>
          <input
            type="number"
            value={water}
            onInput={handleWaterChange}
            class={fieldClass}
            min="1"
          />
        </div>
      </div>

      <div class="pt-3 border-t border-dusty-rose/40 flex items-center justify-between">
        <span class={`${subtitleClass} text-md`}>Ratio</span>
        <span class={`${infoClass} text-xl`}>
          1:{calculateRatio().toFixed(1)}
        </span>
      </div>
    </div>
  );
}
