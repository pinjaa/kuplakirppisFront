import React from 'react'

export default function Register() {

    useEffect(() => {
        axios.get(url + 'modules/register.php/')
        .then((response) => {
            const json = response.data;
           
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error)
        })
      }, [])

  return (
      <div>
      <h1>Rekisteröidy</h1>
    
    <form action="" method='post'>
    <label>Etunimi</label>
    <input type="text"  name='etunimi' id='etunimi'/> <br /> <br />
    <label>Sukunimi</label>
    <input type="text" name='sukunimi' id='sukunimi'/> <br /><br />
    <label>Sähköpostiosoite</label>
    <input type="email"name='email' id='email' /> <br /><br />
    <label>Salasana</label>
    <input type="password" name='salasana' id='salasana'/> <br /><br />
    <button type='submit' className='btn btn-primary'>Rekisteröidy</button>
    </form>
    </div>
  )
}
