import seedDb from "@/lib/seed";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // check environment first
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({
        message: "seeding not allowed",
        status: 403,
      });
    }

    // Run seeder
    await seedDb();

    //  Send success response
    return NextResponse.json({
      message: "Seeding database.json successful.",
    });
  } catch (error) {
    // Cache and return any error
    return NextResponse.json(
      { message: "Error seeding database", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Use POST method to seed the database.",
  });
}
