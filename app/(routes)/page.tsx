import Container from "@/components/ui/container";
import {getBillboard} from "@/actions/get-billboard";
import {Billboard} from "@/components/billboard";
export const revalidate = 0;
const storeID = "ec8dca4a-8681-4947-a903-cc541ea2887f"; // Временное решение

const HomePage= async()=>{
    const billboard = await  getBillboard(storeID, "75f72859-fd72-433c-be44-938a1790ee50")
    return(
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
        </Container>
    )
}

export default HomePage;