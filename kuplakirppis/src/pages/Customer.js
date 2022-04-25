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
    
    function piilo() {
        document.getElementById("piilo").style.visibility = "visible";
        
    }

    async function save(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        piilo();

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
            document.getElementById("errorAlert").innerHTML="<div class='alert alert-success' role='alert' id='erroralert'>"+ "Tuote lisättiin onnistuneesti" +"  </div>"
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        });
    }
    
    

    if (!addingProduct) {
        return (
            <>
             <div id='errorAlert'></div>
               <p>Tästä voit lisätä oman tuotteesi myyntiin.</p>
                <div>
                    <button className='btn btn-dark' type='button' onClick={() => setAddingProduct(true)}>Aloita</button>
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
        
            
                <div> <label>Valitse kategoria:</label>
                <CategoryList 
                        url={url}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                />
                <p></p>
                    <label>Kuva: </label>
                    <input type="file" name="file" onChange={e => setFile(e.target.files[0])}></input>
                    {file != null ? (
                        <>
                        <p>Filename: {file.name}</p>
                        <p>Filetype: {file.type}</p>
                        <p>Filesize: {file.size}</p>
                        </>
                    ):(
                        <p>File is not selected</p>
                    )}
                </div>
              
                
                <button>Lataa kuva</button>
                        <p></p>
                </div>
                </form>
                <form onSubmit={saveProduct} id="piilo" style={{visibility:"hidden"}}>
                    <div>
                        <input type="text" placeholder='Tuotteen nimi' value={productName} onChange={(e) => setProductName(e.target.value)} />
                    </div> <p></p>
                    <div>                       
                        <input type="text" placeholder='Tuotteen hinta' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div> <p></p>
                    <div>                       
                        <textarea type="text" style={{resize:"none"}} placeholder='Tuotteen kuvaus' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div> <p></p>
                    <div>

                    <button className='btn btn-dark' type='button' onClick={() => setAddingProduct(false)} >Peruuta</button>
                    <button className='btn btn-dark' type='submit'style={{marginLeft:"10px",backgroundColor:"purple"}} >Lisää tuote</button>
                </div>
                </form>
          
            </>
        )
    }
  
}
