import { getCategory } from "@/actions/get-category";
import { getColors } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";
import { getBillboard } from "@/actions/get-billboard";
import { Billboard } from "@/components/billboard";
import Filter from "./components/filter"
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";
const storeID = "ec8dca4a-8681-4947-a903-cc541ea2887f";
export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryID: string;
  };
  searchParams: {
    colorID?: string;
    sizeID?: string;
  };
}

const CategoryPage = async ({
  params,
  searchParams
}: CategoryPageProps) => {

  const products = await getProducts(
    {
      categoryID: params.categoryID,
      colorID: searchParams.colorID,
      sizeID: searchParams.sizeID,
    },
    "ec8dca4a-8681-4947-a903-cc541ea2887f"
  );
const sizes= await getSizes("ec8dca4a-8681-4947-a903-cc541ea2887f");
const category = await getCategory("ec8dca4a-8681-4947-a903-cc541ea2887f", params.categoryID);
const colors= await getColors("ec8dca4a-8681-4947-a903-cc541ea2887f");
const billboard = await getBillboard("ec8dca4a-8681-4947-a903-cc541ea2887f", category.billboardID);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
            <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors}/>
            <div className="hidden lg:block">
                <Filter 
                valueKey="sizeID"
                name="Sizes"
                data={sizes}
                />
                <Filter 
                valueKey="sizeID"
                name="Colors"
                data={colors}
                />
            </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products.map((item)=>(
                    <ProductCard 
                    key={item.id}
                    data={item}
                    />
                  ))}
              </div>
          </div>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
