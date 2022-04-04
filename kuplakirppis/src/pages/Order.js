import React from 'react'
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import { Trash } from 'react-bootstrap-icons';

export default function Order({cart, removeFromCart, emptyCart}) {
    let sum = 0;

  return (
    <div>
        <h3 className='header'>Tuotteet ostoskorissa</h3>
        <table className='table'>
            <tbody>
                {cart.map(product => {
                    sum+=parseFloat(product.hinta);
                    return (
                        <tr key={uuid()}>
                            <td><img style={{height: "100px"}} src={product.image} /> </td>
                            <td>{product.tuotenimi}</td>
                            <td>{product.hinta} €</td>
                            <td><a href="#" onClick={() => removeFromCart(product)}>Poista</a></td>
                        </tr>
                    )
                })}
                <tr key={uuid()}>
                    <td></td>
                    <td>{sum.toFixed(2)} €</td>
                    <td></td>
                </tr>
                <tr>
                    <Link to="#"><button className='btn' style={{borderColor: "black"}} onClick={() => emptyCart()}><Trash size={20} color={'red'} ></Trash> Tyhjennä ostoskori</button></Link>
                    <Link to="../pages/orderForm"><button  className='btn btn-success'>Tilaa tuotteet</button></Link>
                </tr>
            </tbody>
        </table>
        
    </div>
  )
}
