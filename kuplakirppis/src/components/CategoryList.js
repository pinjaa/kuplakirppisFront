import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function CategoryList({url, selectedCategory, setSelectedCategory}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      axios.get(url + 'products/getcategories.php')
      .then((response) => {
          const json = response.data;
          if (json) {
              if (selectedCategory === null) {
                  setSelectedCategory(json[0]);
              }
              setCategories(json);
          }
      }).catch (error => {
          alert(error.response === undefined ? error : error.response.data.error);
      })
    }, [selectedCategory])

    function onCategoryChange(value) {
        setSelectedCategory(categories.filter(item => item.ktg_nro === value));
        
        //console.log(value);
        //console.log(categories);
    }
  return (
    <select value={selectedCategory?.ktg_nro} onChange={(e) => onCategoryChange(e.target.value)}>
        {categories.map((category) => (
            <option key={category.ktg_nro} value={category.ktg_nro}>{category.ktg_nimi}</option>
        ))}
    </select>
  )
}
