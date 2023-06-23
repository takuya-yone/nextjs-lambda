import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'health check OK' }, { status: 200 })
}
