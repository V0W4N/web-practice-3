

import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "./store-switcher";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { ModeToggle } from "./ui/mode-toggle";

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
            <div className="ml-auto flex items-end space-x-4">
                <UserButton />
                <ModeToggle />
            </div>
        </div> 
    </div> 
    );
}
 
export default Navbar;