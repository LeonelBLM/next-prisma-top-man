import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma"

export async function GET(request, { params }) {
    const chofer = await prisma.chofer.findUnique({
        where: {
            id_chofer: Number(params.id)
        },
    });
    return NextResponse.json(chofer)
}

export async function PUT(request, { params }) {
    const data = await request.json()
    const choferUpdate = await prisma.chofer.update({
        where: {
            id_chofer: Number(params.id)
        },
        data: data
    });
    return NextResponse.json(choferUpdate)
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