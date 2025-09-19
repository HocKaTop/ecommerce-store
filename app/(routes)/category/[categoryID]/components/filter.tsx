"use client"
import qs from "query-string"
import {Color,Size} from "@/types"
import {useSearchParams, useRouter} from "next/navigation"
interface FilterProps{
    data:(Size | Color)[];
    name:string;
    valueKey: string;
}


const Filter:React.FC<FilterProps> = ({
    data,
    name,
    valueKey
})=>{
    const searchParams = useSearchParams();
    const router= useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id:string)=>{
        const current = qs.parse(searchParams.toString());
        const query = {
            ...current,
            [valueKey]:id
        };

        if(current[valueKey] === id){
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, {skipNull: true});

        router.push(url);
    return(
        <div className="mb-8">
            <h3 className="font-semibold text-lg"> 
                {name}
            </h3>
        </div>
    )
}
}

export default Filter;