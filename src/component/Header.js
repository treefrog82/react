function Header(props) {
    return (
        <header className="Header">
            <h1><a href='/'>{props.title}</a></h1>
        </header>
    );
}
export default Header;