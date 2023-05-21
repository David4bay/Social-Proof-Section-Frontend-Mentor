/* eslint-disable react/prop-types */

function Card({name, verification, post, image}) {

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#511f50',
        padding: '35px',
        width: '332px',
        gap: '28px',
        borderRadius: '5px'
    }

    const socials = {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px'
    }

    const imageStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '100%'
    }

    const caption = {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
    }

    const nameStyle = {
        fontSize: '17px',
        fontWeight: '700',
        color: '#fff6ff'
    }

    const verifyTag = {
        fontSize: '17px',
        color: '#db7bba'
    }

    const quoteBody = {
        lineHeight: '1.4',
        color: '#fff6ff'
    }

    return (
        <div className="Card" style={cardStyle}>
                    <figure style={socials} className="Image__Container">
                        <img style={imageStyle} src={image} alt="" />
                        <figcaption style={caption} className="Info">
                        <h2 style={nameStyle} className="Name">
                        {name}
                        </h2>
                        <p style={verifyTag} className="Verification">
                        {verification}
                        </p>
                        </figcaption>
                    </figure>
                        <p style={quoteBody} className="Quote">
                        {post}
                        </p>
        </div>
    )
}

export default Card;