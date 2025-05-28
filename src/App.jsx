import React, { useEffect, useState, useRef } from "react";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "./pages/Form";
import Datatable from "./pages/Datatable";

const App = () => {
  const [product, setProduct] = useState({});
  const [productsData, setProductsData] = useState([]);
  const [godown, setGodown] = useState([]);
  const [editId, setEditId] = useState(-1);
  const imgRef = useRef();
  const [error, setError] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const oldData = JSON.parse(localStorage.getItem("productss") || "[]");
    setProductsData(oldData);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "godown") {
      let newGodown = [...godown];
      if (checked) {
        newGodown.push(value);
      } else {
        newGodown = newGodown.filter((val) => val !== value);
      }
      setGodown(newGodown);
    } else if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const product_image = {
            name: file.name,
            type: file.type,
            url: reader.result,
          };
          setProduct((prev) => ({ ...prev, product_image }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validation = () => {
    let errors = {};
    if (!product.product_name)
      errors.product_name = "*Product Name is required";
    if (!product.product_price)
      errors.product_price = "*Product Price is required";
    if (!product.product_stock) errors.product_stock = "*Stock is required";
    // if (!product.file) errors.file = "*Image is required";
    if (!godown || godown.length === 0) errors.godown = "*Godown is required";
    if (!product.description) errors.description = "*Description is required";

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validation()) return;

    if (editId === -1) {
      const newData = [...productsData, { ...product, godown, id: Date.now() }];
      setProductsData(newData);
      localStorage.setItem("productss", JSON.stringify(newData));
    } else {
      const updatedData = productsData.map((item) =>
        item.id === editId ? { ...product, godown, id: editId } : item
      );
      setProductsData(updatedData);
      localStorage.setItem("productss", JSON.stringify(updatedData));
      setEditId(-1);
    }

    setProduct({});
    setGodown([]);
    imgRef.current.value = "";

    navigate("/datatable");
  };

  const handleDelete = (id) => {
    const newData = productsData.filter((item) => item.id !== id);
    setProductsData(newData);
    localStorage.setItem("productss", JSON.stringify(newData));
  };

  const handleEdit = (id) => {
    const selected = productsData.find((item) => item.id === id);
    if (selected) {
      setProduct(selected);
      setGodown(selected.godown || []);
      setEditId(id);
      navigate("/form");
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/form"
          element={
            <Form
              handleChange={handleChange}
              product={product}
              godown={godown}
              handleSubmit={handleSubmit}
              imgRef={imgRef}
              isEdit={editId !== -1}
              error={error}
            />
          }
        />
        <Route
          path="/datatable"
          element={
            <Datatable
              productsData={productsData}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
