import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import ProductBox from "../Atoms/ProductBox";
import { fetchProductsByCategory } from "../../utils/api.js";

export default function ProductContainer({ category }) {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true); 
      try {
        const data = await fetchProductsByCategory(category, currentPage, 8); // Fetch products based on category
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

    if (token) { 
      loadProducts();
    } else {
      setError("You must be logged in to view products.");
    }
  }, [currentPage, category]);
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
        {/* <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={currentPage >= totalPages - 1}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button> */}
      </div>
    </div>
  );
}
