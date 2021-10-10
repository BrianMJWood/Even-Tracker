import Button from "./Button"

const Header = ({ title, toggleForm, showForm }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={toggleForm} color={showForm ? 'red' : 'green'} text={showForm ? 'Close' : 'Add'} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Event Tracker'
}

export default Header