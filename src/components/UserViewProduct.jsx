import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import "../styles/userViewOneProduct.css";

const UserViewProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const [qty, setQty] = useState(1);

  function inc() {
    if (qty < product.stock) {
      setQty(qty + 1);
    }
  }

  function dec() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

async function addToCart(e) {
  e.preventDefault();
  try {
    
    const res = await axios.get("http://localhost:5000/Card");
    const existing = res.data.find(item => item.id === product.id);

    if (existing) {
    
      await axios.patch(`http://localhost:5000/Card/${existing.id}`, {
        quantity: existing.quantity + qty,
      });
      toast.success("Quantity updated in Card");
    } else {
      // 3. Add new product
      await axios.post("http://localhost:5000/Card", {
        ...product,
        quantity: qty,
      });
      toast.success("Product added to cart");
    }
  } catch (err) {
    toast.error("Failed to add to cart: " + err.message);
  }
}


  return (
    <div className="ViewProduct">
      <div className="img">
        <img src={product.pictures} alt={product.name} />
      </div>

      <div className="details">
        <h3>
          {product.name} | {product.brand} | {product.categories}
        </h3>
        <span>
          MRP : <strike>{product.price}</strike>
        </span>
        <span>
          Offer 15% : {product.price - (product.price * 15) / 100}
        </span>
        <span>
          Stock : <big>{product.stock}</big>
        </span>
        <span>Quantity : {qty}</span>

        <div className="qty-buttons">
          <button onClick={inc}>+</button>
          <button onClick={dec}>-</button>
        </div>

        <button style={{color:"black"}} onClick={() => navigate("/checkout", { state: { product, qty } })}>
          Buy Now
        </button>
        <button onClick={addToCart}>Add To Cart</button>
      </div>
    </div>
  );
};

export default UserViewProduct;

