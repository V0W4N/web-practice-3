'use client';

import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";

const Navbar = () => {
    return ( 
    <div className="border-b">
        <div className="flex h-16 items-center px-4">
            <div>
                Store switcher placeholder
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