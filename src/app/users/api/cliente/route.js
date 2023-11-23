const { NextResponse } = require("next/server")
import {prisma} from '@/libs/prisma'

export async function GET() {

    const clientes = await prisma.cliente.findMany()
    console.log(clientes)

    return NextResponse.json(clientes)
}

export async function POST(request){

    const {nombre, apellido, clave, email, direccion, telefono} = await request.json()
    const newCliente = await prisma.cliente.create({
        data: {
            nombre,
            apellido,
            clave, 
            email, 
            direccion, 
            telefono,
        },
    });
    return NextResponse.json(newCliente);
}