'use client';

import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "./store-switcher";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

const Navbar = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect("/sign-in")
    }
    
    const stores = await prismadb.store.findMany({
        where:{
            userId
        }
    });


    return ( 
    <div className="border-b">
        <div className="flex h-16 items-center px-4">
            <div>
                <StoreSwitcher items={stores}/>
            </div>
            <div>
                Routes placeholder
            </div>
            <MainNav className="mx-6"/>
            <div className="ml-auto flex items-center space-x-4">
                
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div> 
    </div> 
    );
}
 
export default Navbar;