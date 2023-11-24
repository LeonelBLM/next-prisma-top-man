import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma"

export async function GET(request, { params }) {
    const carga = await prisma.carga.findUnique({
        where: {
            id_carga: Number(params.id)
        },
    });
    return NextResponse.json(carga)
}

export async function PUT(request, { params }) {
    const data = await request.json()
    const cargaUpdate = await prisma.carga.update({
        where: {
            id_carga: Number(params.id)
        },
        data: data
    });
    return NextResponse.json(cargaUpdate)
}

export async function DELETE(request, { params }) {
    try {
        const cargaRemove = await prisma.carga.delete({
            where: {
                id_carga: Number(params.id)
            },
        });
        return NextResponse.json(cargaRemove);
    }
    catch (error) {
        return NextResponse.json(error.message)
    }
}