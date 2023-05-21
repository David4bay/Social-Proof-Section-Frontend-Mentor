import './Header.scss'

function Header({headingLevel}) {

    const H = `h${headingLevel}`;

    return (
        <div className="Header">
            <div className="Styled__Div"></div>
            <H className='Header__Title'>10,000+ of our users love our products.</H>
            <p className="Sub__Heading">We only provide great products combined with excellent customer service.
    See what our satisfied customers are saying about our services.</p>
        
        </div>
    )
}

Header.propTypes = {
    headingLevel: Number.isRequired
}

Header.defaultProps = {
    headingLevel: 1,
}

export default Header;