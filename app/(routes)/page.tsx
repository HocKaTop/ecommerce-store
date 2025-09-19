import Container from "@/components/ui/container";
import {getBillboard} from "@/actions/get-billboard";
import {Billboard} from "@/components/billboard";
import { getProducts } from "@/actions/get-products";
import ProductList from "@/components/product-list";
export const revalidate = 0;
const storeID = "ec8dca4a-8681-4947-a903-cc541ea2887f"; // Временное решение

const HomePage= async()=>{
    const products = await getProducts({isFeatured:true}, storeID)
    const billboard = await  getBillboard(storeID, "75f72859-fd72-433c-be44-938a1790ee50")
    return(
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products} />
            </div>
        </Container>
    )
}

export default HomePage;