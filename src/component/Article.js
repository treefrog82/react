function Article(props) {
    return (
        <article className="Article">
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}
export default Article;