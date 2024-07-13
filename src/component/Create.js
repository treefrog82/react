function Create(props) {
    return (
        <article className="Create">
            <h2>Create</h2>
            <form onSubmit={e=>{
                e.preventDefault()
                const title = e.target.title.value
                const body = e.target.body.value
                props.onCreate(title, body)
            }}>
                <p><input type='text' name='title' placeholder='title'/></p>
                <p><textarea name='body' placeholder='body'/></p>
                <p><input type='submit' value='Create'/></p>
            </form>
        </article>
    );
}
export default Create;