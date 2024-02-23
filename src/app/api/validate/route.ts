import colors from "../../../data/colors.json";

export async function GET(request: Request) {
  //@ts-ignore
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query") as keyof typeof colors;

  return Response.json({ [query]: colors[query] });
}
