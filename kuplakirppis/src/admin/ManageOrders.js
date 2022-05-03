import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'

export default function ManageOrders({url, isAdmin}) {
    const [orders, setOrders] = useState([])

    useEffect(() => {
      axios.get(url + 'products/getorders.php')
      .then((response) => {
          const json = response.data;
          setOrders(json);
      }).catch(error => {
          alert(error.response === undefined ? error : error.response.data.error)
      })
    }, [])

    if(isAdmin) {
        return (
            <>
                <Link to="../admin/Admin" style={{float:"left"}}>Takaisin</Link><br />
                <h3>Tarkastele tilauksia</h3>
                <table className='table'>
                    <thead>
                        <tr key={uuid()}>
                            <th>Tilausnumero</th>
                            <th>Asiakasnumero</th>
                            <th>Tilauspäivämäärä</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={uuid()}>
                                <td>{order.tilausnro}</td>
                                <td>{order.asiakasnro}</td>
                                <td>{order.tilauspvm}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }else {
        return (
            <div>
                <h1>Ei oikeuksia</h1>
                <Link to="/">Palaa etusivulle</Link>
            </div>
          )
    }
}
