import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext"; // Import the AuthContext
import ProductBox from "../Atoms/ProductBox";
import { fetchProducts } from "../../utils/api.js";


export default function ProductContainer() {
  const { token } = useAuth(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    
    const loadProducts = async () => {
      if (!token) {
        setError("You must be logged in to view products.");
        setLoading(false);
        return;
      }

      try {
        const data = await fetchProducts(currentPage, 8); 
        console.log("Fetched data:", data);
        setProducts(data.content);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [currentPage,0]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-between p-1">
        {products.map((product) => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        {/* Uncomment and implement pagination buttons if needed */}
        {/* <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage >= totalPages - 1}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button> */}
      </div>
    </div>
  );
}
