import axios from "axios";
import parse from "node-html-parser";

export async function POST(req: Request) {
  const data = await req.json();
  const url = data.url;
  const response = await axios.get(url);
  const html = response.data;
  const root = parse(html);
  console.log(root);
  return new Response("Hello, Next.js!");
}
