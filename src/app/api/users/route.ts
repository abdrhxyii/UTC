import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../utils/dbConnect'; 
import User from "../../../models/user";

export async function GET(req: NextRequest) {
    return NextResponse.json({ message: "API Works" }, { status: 200 });
}

export async function POST(req: NextRequest) {
    await dbConnect();
    const { email, password, mobilenumber, deliveryplace }: any = req.body;
    
    try {
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            return NextResponse.json({ message: "User Already Exists, Please login" }, { status: 400 });
        }
        
        const userData = await User.create({
            email, 
            password, 
            mobilenumber, 
            deliveryplace
        });
        
        return NextResponse.json({ message: "User Created", user: userData }, { status: 201 });
        
    } catch (err) {
        console.error('Error creating user:', err);
        return NextResponse.json({ message: 'no' }, { status: 500 });
    }
}
