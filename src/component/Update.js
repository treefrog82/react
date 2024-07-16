import { useState } from "react";

function Update(props) {
    let [title, setTitle]=useState(props.title)
    let [body, setBody]=useState(props.body)
    return (
        <article className="Update">
            <h2>Update</h2>
            <form onSubmit={e=>{
                e.preventDefault()
                const title = e.target.title.value
                const body = e.target.body.value
                props.onUpdate(title, body)
            }}>
                <p><input type='text' name='title' placeholder='title' value={title} onChange={e=>{
                    setTitle(e.target.value)
                }}/></p>
                <p><textarea name='body' placeholder='body' value={body} onChange={e=>{
                    setBody(e.target.value)
                }}/></p>
                <p><input type='submit' value='Update'/></p>
            </form>
        </article>
    );
}
export default Update;