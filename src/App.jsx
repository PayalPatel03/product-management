import React, { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Datatable from "./pages/Datatable";

const App = () => {
  const [product, setProduct] = useState({});
  const [productsData, setProductsData] = useState([]);
  const [godown, setGodown] = useState([]);

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
        const fileData = {
          name: file.name,
          type: file.type,
          url: reader.result,
        };
        setProduct((prev) => ({ ...prev, fileData }));
      };
      reader.readAsDataURL(file);
    }
  } else {
    setProduct((prev) => ({ ...prev, [name]: value }));
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
            />
          }
        />
        <Route path="/datatable" element={<Datatable />} />
      </Routes>
    </>
  );
};

export default App;
