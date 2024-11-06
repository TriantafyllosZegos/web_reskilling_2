import Cookies from "js-cookie";

export const fetchProducts = async (page = 0, size = 8) => {
  const token = Cookies.get("token");

  if (!token) {
    throw new Error("No authentication token found.");
  }


  // const response = await fetch(
  //   `http://localhost:9090/products?page=${page}&size=${size}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`, 
  //       "Content-Type": "application/json", 
  //     },
  //   }
  // );
  try {
    const response = await fetch(
      `http://localhost:9090/products?page=${page}&size=${size}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`, 
          "Content-Type": "application/json",
        },
        mode: "cors", 
        credentials: "include", 
      }
    );

    if (!response.ok) {
      // Log the response status and text to understand the error better
      const errorText = await response.text();
      console.error("Fetch error details:", response.status, errorText);
      throw new Error("Failed to fetch products");
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch request failed:", error);
    throw error; // Rethrow for handling by the calling function
  }
};


// Fetch products by category
export const fetchProductsByCategory = async (category, page = 0, size = 8) => {
  const token = Cookies.get("token"); 
  const response = await fetch(
    `http://localhost:9090/products/category/${category}?page=${page}&size=${size}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products by category");
  }
  return await response.json();
};

// User login
export const loginUser = async (username, password) => {
  const response = await fetch(`http://localhost:9090/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  Cookies.set("token", data.accessToken);
  return data.accessToken;
};

// User registration

export const registerUser = async (
  username,
  password,
  firstName,
  lastName,
  email
) => {
  const response = await fetch("http://localhost:9090/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, firstName, lastName, email }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return await response.json();
};
