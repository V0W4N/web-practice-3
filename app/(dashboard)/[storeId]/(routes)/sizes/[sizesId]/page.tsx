import prismadb from "@/lib/prismadb";
import { SizeForm } from "./components/billboard-form";

const SizePage = async ({
    params
}:{
    params: {sizeId: string}
}) => {
    const size = await prismadb.size.findFirst({
        where: {
            id: params.sizeId,
        }
    })


    return ( 
    <div className="flex-col">
        <div className="flex-1 space-y-4 p-8">
            <SizeForm initialData={size}/>
        </div>
    </div> );
}
 
export default SizePage;