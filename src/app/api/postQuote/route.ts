import { connectDb } from "@/lib/mongodb";
import GeQuote from "@/models/GeQuote";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDb();
    const body = await req.json();
    const newData = await GeQuote.create(body);
    return NextResponse.json(newData, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
