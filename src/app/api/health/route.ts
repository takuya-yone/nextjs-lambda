import { NextRequest, NextResponse } from 'next/server'

import { logger } from '@/app/utils/logger'

export async function GET(request: NextRequest) {
  logger.info(request.url)
  // console.log(request)
  return NextResponse.json({ message: 'health check OK' }, { status: 200 })
}
