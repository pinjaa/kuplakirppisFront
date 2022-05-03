import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';

export default function ManageCategories({url}) {
    const [newCategory, setNewCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [addingCategory, setAddingCategory] = useState(false);

    function saveCategory(e) {
        e.preventDefault();
        const json = JSON.stringify({name: newCategory});
        axios.post(url + 'products/addCategory.php', json,{
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            setNewCategory('');
            setAddingCategory(false);
            setSelectedCategory(response.data);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        });
    }

    if (!addingCategory) {
        return (
            <>
                <Link to="../admin/Admin" style={{float:"left"}}>Takaisin</Link><br />
                <h3>Ylläpidä kategorioita</h3>
                <div>
                    <label>Kategoria</label>
                    <CategoryList 
                        url={url}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    <button className='btn btn-dark' type='button' onClick={() => setAddingCategory(true)}>Lisää</button>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <Link to="../admin/Admin" style={{float:"left"}}>Takaisin</Link><br />
                <h3>Lisää uusi kategoria</h3>
                <form onSubmit={saveCategory}>
                    <div>
                        <label>Kategorian nimi</label>
                        <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                    </div>
                    <button className='btn btn-dark' type='button' onClick={() => setAddingCategory(false)} >Peruuta</button>
                    <button type='submit'>Tallenna</button>
                </form>
            </>
        )
    }
  
}
