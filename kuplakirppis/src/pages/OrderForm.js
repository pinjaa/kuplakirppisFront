import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function OrderForm({cart, emptyCart}) {
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [osoite, setOsoite] = useState("");
  const [postinro, setPostinro] = useState("");
  const [postitmp, setPostitmp] = useState("");
  const [email, setEmail] = useState("");
  const [puhelinnro, setPuhelinnro] = useState("");

  function order(e) {
    e.preventDefault();

    const json = JSON.stringify({
      etunimi: etunimi,
      sukunimi: sukunimi,
      osoite: osoite,
      postinro:postinro,
      postitmp: postitmp,
      email: email,
      puhelinnro: puhelinnro,
      cart: cart
    });

    axios.post("http://localhost/kuplakirppisBack/modules/order.php", json, {
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    .then(() => {
      emptyCart();
      alert("Tilaus tehty!");
    }).catch(error => {
      alert(error.response === undefined ? error : error.response.data.error);
    });
  }

  return (
    <div>
      <h3>Tilauslomake</h3>
      <form id="tilauslomake" onSubmit={order}>
        <input type="text" placeholder='Etunimi' name='etunimi' onChange={e => setEtunimi(e.target.value)} /><br />
      <p></p>
        <input type="text" placeholder='Sukunimi' name='sukunimi' onChange={e => setSukunimi(e.target.value)}/><br />
        <p></p>
        <input type="text" placeholder='Osoite' name='osoite' onChange={e => setOsoite(e.target.value)}/><br />
        <p></p>
        <input type="text" placeholder='Postinumero' name='postinro' onChange={e => setPostinro(e.target.value)}/><br />
        <p></p>
        <input type="text" placeholder='Postitoimipaikka' name='postitmp' onChange={e => setPostitmp(e.target.value)}/><br />
        <p></p>
        <input type="text" placeholder='Sähköpostiosoite' name='email' onChange={e => setEmail(e.target.value)}/><br />
        <p></p>
        <input type="text" placeholder='Puhelinnumero' name='puhelinnro' onChange={e => setPuhelinnro(e.target.value)}/><br />
        <p></p>
        <input className='btn btn-success' type="submit" value="Tilaa tuotteet" />
      </form>
    </div>
  )
}
