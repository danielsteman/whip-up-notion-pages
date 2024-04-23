import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import xlsx from "node-xlsx";

export async function POST(req: Request) {
  const uuid = uuidv4();

  const formData = await req.formData();
  const fileBuffer = formData.get("file") as File;

  if (!fileBuffer || fileBuffer.size == 0) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 500 });
  }

  try {
    const bufferArray = await fileBuffer.arrayBuffer();
    const buffer = Buffer.from(bufferArray);
    const workSheetsFromBuffer = xlsx.parse(buffer);
    console.log(workSheetsFromBuffer);
  } catch (error) {
    console.error("Error parsing Excel file:", error);
    return NextResponse.json(
      { error: "Error parsing Excel file" },
      { status: 500 }
    );
  }

  return NextResponse.json({ id: uuid });
}
