import { Select } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSortingData } from "../services/AllProduct";

export const SortingData = () => {
  const options = [
    {
      value: "desc",
      label: "Descending",
    },
    {
      value: "brand",
      label: "By Brand",
    },
    {
      value: "Name",
      label: "Name",
    },
  ];
  const dispatch = useDispatch();

  const [showSorting, setShowSorting] = useState(false);
  const data = useSelector((state) => state.sortingdata.products);

  React.useEffect(() => {
    if (showSorting) {
      dispatch(fetchSortingData());
    }
  }, [dispatch, showSorting]);

  const handleChange = (value) => {
    setShowSorting(true);
    dispatch(fetchSortingData(value));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Sort By Category</h2>
      {!showSorting && (
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowSorting(true)}
          >
            Show Sorting Options
          </button>
        </div>
      )}
      {showSorting && (
        <div className="mb-4">
          <Select
            placeholder="Select sorting option"
            onChange={handleChange}
            options={options}
            allowClear={true}
            style={{ width: 200 }}
          />
        </div>
      )}
      {showSorting && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full mb-4"
              />
              <p className="font-semibold">{product.name}</p>
              <p>{product.description}</p>
              <p>Brand: {product.brand}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


