import { Link, useLocation, useParams } from "react-router-dom";

export default function Product() {
    const { state } = useLocation();
    return (
        <div>
            <h3>Id selected {state.categoryId}</h3>
            <Link to='/'>Category</Link>
        </div>
    )
}