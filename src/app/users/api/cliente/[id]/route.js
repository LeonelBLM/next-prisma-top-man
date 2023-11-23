import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma"

export async function GET(request, { params }) {
    const cliente = await prisma.cliente.findUnique({
        where: {
            id_cliente: Number(params.id)
        },
    });
    return NextResponse.json(cliente)
}

export async function PUT(request, { params }) {
    const data = await request.json()
    const clienteUpdate = await prisma.cliente.update({
        where: {
            id_cliente: Number(params.id)
        },
        data: data
    });
    return NextResponse.json(clienteUpdate)
}

export async function DELETE(request, { params }) {
    try {
        const choferRemove = await prisma.chofer.delete({
            where: {
                id_chofer: Number(params.id)
            },
        });
        return NextResponse.json(choferRemove);
    }
    catch (error) {
        return NextResponse.json(error.message)
    }
}