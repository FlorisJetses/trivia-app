import colors from "../../data/colors.json";

export async function GET(request: Request) {
  const keys = Object.keys(colors);
  const randomKey = keys[Math.random() * keys.length] as keyof typeof colors;

  return { [randomKey]: colors[randomKey] };
}
