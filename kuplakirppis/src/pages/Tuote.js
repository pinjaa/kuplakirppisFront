import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import {Container, Row, Col} from 'react-bootstrap';
import BootstrapCarousel from '../components/BootstrapCarousel';
import { Cart3 } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';

/*export default function Products({url, addToCart}) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);

  let params = useParams();

  useEffect(() => {
    axios.get(url + 'products/getproducts.php/' + params.categoryId)
    .then((response) => {
        const json = response.data;
        setCategoryName(json.category);
        setProducts(json.products);
    }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error)
    })
  }, [params]) 
  } */

  
export default function Tuote() {
  return (
    <div className='container-fluid'>
      <div className='row g-0'>
        <div className='category-div col-2'>
     
        </div>
        <div className='col'>
         
       
          <Container style={{paddingTop:"10%", borderColor:"green"}}>
          <Row>
          <Link to="/" style={{float:"left"}}>Etusivu</Link>
    <Col style={{textAlign:"center",height:"500px"}}>  
    
    <img src="https://cdn.pixabay.com/photo/2013/07/13/10/45/shoes-157716_1280.png" style={{marginLeft:"auto",marginRight:"auto",display:"block",}}/>
    <p style={{paddingTop:"10px"}}>hyvät popot vaikka häihin tai hautajaisiin</p> 
    
    </Col>
    
    <Col>
    <h2 style={{color:"green"}}>Air jordan </h2>
    
    <h3>150e</h3>
    <h3>Tuira, Oulu</h3>
    <button className='btn btn-primary' style={{marginTop:"10px"}} onClick={e => addToCart(product)}><Cart3 size={25} color={'white'}></Cart3> Lisää ostoskoriin</button>
    </Col>
   
  </Row>
 
  
</Container>
        </div>
       
      </div>
    </div>
  )
}
