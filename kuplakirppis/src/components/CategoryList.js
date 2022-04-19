import axios from 'axios';
import React from 'react'

export default function CategoryList() {
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
        setSelectedCategory(categories.filter(item => item.id === value));
    }
    
  return (
    <select value={selectedCategory?.id} onChange={(e) => onCategoryChange(e.target.value)}>
        {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
        ))}
    </select>
  )
}
