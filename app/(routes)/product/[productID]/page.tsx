import { getProduct } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import Gallery from "@/components/gallery";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Info from "@/components/ui/info";

interface ProductPageProps{
    params:{
        productID: string;
    }
}

const ProductPage:React.FC<ProductPageProps> = async ({
    params
}) => {
    const product= await getProduct("ec8dca4a-8681-4947-a903-cc541ea2887f", params.productID);
    const suggestedProducts = await getProducts(
        { categoryID: product?.category.id },
        "ec8dca4a-8681-4947-a903-cc541ea2887f"
    )
  return (
    <div className=" bg-whire">
    <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                <div>
                    <Gallery images={product.images} />
                </div>
                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    <Info data={product}/>
                </div>
            </div>
            <hr className="my-10"/>
            <ProductList title= "Related items" items={suggestedProducts}/>
        </div>
    </Container>
    </div>
  )
}

export default ProductPage