const { NextResponse } = require("next/server")
import {prisma} from '@/libs/prisma'

export async function GET() {

    const cargas = await prisma.carga.findMany()
    console.log(cargas)

    return NextResponse.json(cargas)
}

export async function POST(request){

    const {remitenteId, destinatarioId, tipo, destino, importe, estado} = await request.json()
    const newCarga = await prisma.carga.create({
        data: {
            remitenteId, 
            destinatarioId, 
            tipo, 
            destino, 
            importe,
            estado,
        },
    });
    return NextResponse.json(newCarga);
}