import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryList from '../components/CategoryList';
import uuid from 'react-uuid';

export default function ManageProducts({url}) {
    url = 'http://localhost/kuplakirppisBack/';

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([])
    const [addingProduct, setAddingProduct] = useState(false);
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('')
    const [file, setFile] =useState(null);
    const [text, setText] =useState("");

    useEffect(() => {
      if (selectedCategory !== null) {
          axios.get(url + 'products/getproducts.php/' + selectedCategory.ktg_nro)
          .then((response) => {
              const json = response.data;
            if(json) {
                setProducts(json.products);
            }
          }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        });
      }
    }, [url,selectedCategory])
    
    

    async function save(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        formData.append('test',text);

        try {
            const response = await axios({
                method: "post",
                url: url + 'products/uploadImage.php',
                data: formData,
                headers: {"Content-Type": "multipart/form-data"},
            });
            console.log(response);
            setImage(response.data.filename)
        } catch (error) {
            alert(error);
        }
    };

    function saveProduct(e) {
        e.preventDefault();
        const json = JSON.stringify({name: productName, price: price, image: image, description: description, categoryID: selectedCategory.ktg_nro});
        axios.post(url + 'products/addProduct.php', json,{
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            const updatedProducts = [...products,response.data];
            setProducts(updatedProducts);
            setAddingProduct(false);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        });
    }
    
   /*  function doubleSave(e) {
        save(e);
        saveProduct(e);
        
    } */

    if (!addingProduct) {
        return (
            <>
                <h3>Ylläpidä tuotteita</h3>
                <CategoryList 
                        url={url}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                />
                <table className='table'>
                    <thead>
                        <tr key={uuid()}>
                            <th>Tuotenimi</th>
                            <th>Hinta</th>
                            <th>Kuvaus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={uuid()}>
                                <td>{product.tuotenimi}</td>
                                <td>{product.hinta} €</td>
                                <td>{product.kuvaus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <button className='btn btn-dark' type='button' onClick={() => setAddingProduct(true)}>Lisää</button>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <h3>Lisää uusi tuote</h3>
                <form onSubmit={save}>

                <div className="container">
        
            
                <div>
                    <label>Kuva</label>
                    <input type="file" name="file" onChange={e => setFile(e.target.files[0])}></input>
                    {file != null ? (
                        <>
                        <p>Filename: {file.name}</p>
                        <p>filetype: {file.type}</p>
                        <p>filesize: {file.size}</p>
                        </>
                    ):(
                        <p>File is not selected</p>
                    )}
                </div>
                <div>
                    <label>text:</label>
                    <input type="text" name="text" value={text} onChange={e =>setText(e.target.value)} />
                </div>
                
                <button>Lataa kuva</button>

                </div>
                </form>
                <form onSubmit={saveProduct}>
                    <div>
                        <label>Tuotteen nimi</label>
                        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                    </div>
                    <div>
                        <label>Tuotteen hinta</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <label>Tuotteen kuvaus</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div>

                    <button className='btn btn-dark' type='button' onClick={() => setAddingProduct(false)} >Peruuta</button>
                    <button type='submit'>Lisää tuote</button>
                </div>
                </form>
          
            </>
        )
    }
  
}
