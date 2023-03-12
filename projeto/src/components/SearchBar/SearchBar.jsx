import { Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./SearchBar.css";

import { useDispatch } from "react-redux";
import { addSearchValue } from "../../store/feactures/searchSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    searchValue: "",
  });

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    dispatch(addSearchValue(formData.searchValue));
  }, [formData]);

  return (
    <header>
      <div className="searchBar">
        <input
          type="text"
          name="searchValue"
          placeholder={`pequisar`}
          onChange={handleChange}
        />
        <Search />
      </div>
    </header>
  );
};
