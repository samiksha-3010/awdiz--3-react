import { useParams } from "react-router-dom";

function SingleProduct() {

    const data = useParams();
    console.log(data, "-data here")
    return (
        <div>

            {data && data.samiksha}
        </div>
    )
}

export default SingleProduct;



