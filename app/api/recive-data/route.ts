import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Process the received data
  console.log('Received data:', data)

  // You can perform any necessary operations with the data here

  return NextResponse.json({ message: 'Data received successfully' })
}

