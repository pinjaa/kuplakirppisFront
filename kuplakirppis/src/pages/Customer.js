import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost/kuplakirppisBack/modules/customer.php';
export default function Customer() {

    const [file, setFile] =useState(null);
    const [text, setText] =useState("");

    async function save(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        formData.append('test',text);

        try {
            const response = await axios({
                method: "post",
                url: URL,
                data: formData,
                headers: {"Content-Type": "multipart/form-data"},
            });
            console.log(response);
        } catch (error) {
            alert(error);
        }
    };
    return (
        <div className="container">
            <form onSubmit={save}>
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
                <button>Save</button><br />
                <div>
                <label> <input type="text" placeholder='Tuotenimi' name='Tuotenimi'/></label><br />
            <p></p>
            <label> <input type="text" placeholder='Hinta' name='Hinta' /></label><br />
            <p></p>
            <label> <input type="text" placeholder='Kategoria' name='Kategoria' /></label><br />
            <p></p>
         
            <label for="palaute">Kuvaus:</label>
            <textarea className="form-control rounded-0" id="kuvaus" rows="3" style={{resize: "none", maxWidth:"40vw", height:"10vw"}}></textarea><br />
            <input className='btn btn-success' type="submit" value="Jätä ilmoitus" />
                </div>
            </form>
        </div>
    );


}