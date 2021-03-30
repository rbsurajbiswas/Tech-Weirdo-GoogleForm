import './Container.css'

const Header = (props) => {
    return ( 
        <header className="Container">
            <div style={headerFN}>{props.data.formName}</div>
            <div style={headerFD}>{props.data.formDesc}</div>
        </header>
    )
}
Header.defaultProps = {
    data: {formName: 'Test Form', formDesc: 'This is a Testing Form'}
}

const headerFN = {
    fontSize: '20pt',
    textTransform: 'capitalize'
}

const headerFD = {
    fontSize: '15pt',
    color: '#bbbbbb'
}

export default Header