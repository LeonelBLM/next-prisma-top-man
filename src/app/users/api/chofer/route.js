const { NextResponse } = require("next/server")
import {prisma} from '@/libs/prisma'

export async function GET() {

    const choferes = await prisma.chofer.findMany()
    console.log(choferes)

    return NextResponse.json(choferes)
}

export async function POST(request){

    const {nombre, apellido, clave, email, direccion, telefono} = await request.json()
    const newChofer = await prisma.chofer.create({
        data: {
            nombre,
            apellido,
            clave, 
            email, 
            direccion, 
            telefono,
        },
    });
    return NextResponse.json(newChofer);
}