import React from 'react'
import { useState } from 'react';
export default function Customer() {
    const [file, setFile] =useState(null)
    const [text, setText] =useState("")

    return (
        <div className="container">
            <form>
                <div>
                    <label>image</label>
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
                <button>Save</button>
            </form>
        </div>
    );


}