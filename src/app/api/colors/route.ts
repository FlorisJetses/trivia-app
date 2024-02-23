import colors from "../../../data/colors.json";

export async function GET(request: Request) {
  const keys = Object.keys(colors);
  const randomKey = keys[
    Math.floor(Math.random() * keys.length)
  ] as keyof typeof colors;

  return Response.json({
    colorName: colors[randomKey],
    hex: colors[randomKey],
    answer: randomKey,
  });
}
