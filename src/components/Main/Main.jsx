import Card from "../Card/Card";
import './Main.scss'
import imageOne from '../Card/Util/image-colton.jpg'
import imageTwo from '../Card/Util/image-irene.jpg'
import imageThree from '../Card/Util/image-anne.jpg'


function Main() {
    return (
        <div>
            <div className="Card__Section">
            <Card
            image={imageOne} 
            name='Colton Smith' 
            verification='Verified Buyer'
            post='"We needed the same printed design as the one we had ordered a week prior.
            Not only did they find the original order, but we also received it in time.
            Excellent!"'
             />
            <Card
            image={imageTwo} 
            name='Irene Roberts' 
            verification='Verified Buyer'
            post='"Customer service is always excellent and very quick turn around. Completely
            delighted with the simplicity of the purchase and the speed of delivery."'
             />
            <Card
            image={imageThree} 
            name='Anne Wallace' 
            verification='Verified Buyer'
            post='"Put an order with this company and can only praise them for the very high
            standard. Will definitely use them again and recommend them to everyone!"'
             />
            </div>
        </div>
    )
}

export default Main;