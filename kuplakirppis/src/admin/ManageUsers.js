import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'
import axios from 'axios';


export default function ManageUsers({url, isAdmin}) {
    const [users, setUsers] = useState([])
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pword, setPword] = useState("");
    const [usertype, setUsertype] = useState(["E", "K"]);

    const user = usertype.map(user => user);
    const [role, setRole] = useState("E")

    function handleUsertypeChange(e) {
        console.log(usertype[e.target.value]);
        setRole(usertype[e.target.value])
    }


    useEffect(() => {
      axios.get(url + 'products/getusers.php')
      .then((response) => {
          const json = response.data;
          setUsers(json);
      }).catch(error => {
          alert(error.response === undefined ? error : error.response.data.error)
      })
    }, [])

    function save(e){
        if(document.getElementById("etunimi").value==""||document.getElementById("sukunimi").value==""||document.getElementById("email").value==""||document.getElementById("salasana").value==""||document.getElementById("usertype").value==""){
         // alert("et voi asettaa tyhjiä arvoja")
          document.getElementById("registerError").innerHTML="<div class='alert alert-danger' role='alert' id='erroralert'> Et voi asettaa tyhjiä arvoja! </div>"
        } else {

          const json = JSON.stringify({
            fname: fname,
            lname: lname,
            email: email,
            pword: pword,
            user: role
          });

          axios.post(url + "modules/register.php", json, {
            headers: {
              'Accept' : 'application/json',
              'Content-Type' : 'application/json'
            }
          })
          .then((response) => {
            const json = response.data;
            console.log(json)
            document.getElementById("errorAlert").innerHTML="<div class='alert alert-success' role='alert' id='erroralert'>"+ json +"  </div>"
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error)
        })
        }

        e.preventDefault();
      }


    if(isAdmin) {
        return (
            <div>
                <Link to="../admin/Admin" style={{float:"left"}}>Takaisin</Link><br />
                <h3>Tarkastele käyttäjätietoja</h3>
                <table className='table'>
                    <thead>
                        <tr key={uuid()}>
                            <th>Asiakasnumero</th>
                            <th>Etunimi</th>
                            <th>Sukunimi</th>
                            <th>Email</th>
                            <th>Puhelinnumero</th>
                            <th>Osoite</th>
                            <th>Postinumero</th>
                            <th>Postitoimipaikka</th>
                            <th>Adminoikeus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={uuid()}>
                                <td>{user.id}</td>
                                <td>{user.etunimi}</td>
                                <td>{user.sukunimi}</td>
                                <td>{user.email}</td>
                                <td>{user.puhelinnro}</td>
                                <td>{user.osoite}</td>
                                <td>{user.postinro}</td>
                                <td>{user.postitmp}</td>
                                <td>{user.admin_oikeus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <form onSubmit={save}>
                    <h2>Luo käyttäjä</h2>
                    <div class="input-group">
                            <label>Etunimi</label>
                            <input type="text" id='etunimi' name="etunimi" value={fname} onChange={e => setFname(e.target.value)}/>
                        </div>
                    <div class="input-group">
                            <label>Sukunimi</label>
                            <input type="text" id='sukunimi' name="sukunimi" value={lname} onChange={e => setLname(e.target.value)}/>
                        </div>
                        <div class="input-group">
                            <label>Sähköposti</label>
                            <input type="email" id='email' name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div class="input-group">
                            <label>Adminoikeus</label>
                            <select name="usertype" id="usertype"  onChange={e => handleUsertypeChange(e)}>
                                {
                                    user.map((address, key) => <option key={key} value={key}>{address}</option>)
                                }
                            </select>
                        </div>
                        <div class="input-group">
                            <label>Salasana</label>
                            <input type="password" id='salasana' name="salasana"  value={pword} onChange={e => setPword(e.target.value)}/>
                        </div>
                        <div class="input-group">
                            <button type="submit" class="btn btn-dark" name="register_btn">Luo käyttäjä</button>
                        </div>
                </form>
                <div id='registerError'></div>
                <div id='errorAlert'></div>
            </div>
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
