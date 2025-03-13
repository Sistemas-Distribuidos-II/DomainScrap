import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'   
import jwt from 'jsonwebtoken'
import db from '@/config/db'

export async function POST (request) {
    const data = await request.json();

    const userFound = await db.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (userFound) {
        return NextResponse.json({
            message: 'Email already exists'
        }, {
            status: 400
        })
    }

    const usernameFound = await db.user.findUnique({
        where: {
            username: data.username
        }
    })

    if (usernameFound) {
        return NextResponse.json({
            message: 'Username already exists'
        }, {
            status: 400
        })
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await db.user.create({
        data: {
            username: data.username,
            email: data.email,
            password: hashedPassword
        }
    })

    return NextResponse.json(newUser);
}