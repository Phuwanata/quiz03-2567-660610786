import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "phuwanat taratipprai",
    studentId: "660610786",
  });
};
