/* eslint-disable react/prop-types */
import { FaStar} from 'react-icons/fa'
import './InfoDivs.scss';

function InfoDivs({bodyText}) {

    const star = <FaStar color='gold' />

  return (
    <div className='Info__Style'>
        <span className='Ratings__Gap'>
            <i>{star}</i>
            <i>{star}</i>
            <i>{star}</i>
            <i>{star}</i>
            <i>{star}</i>
        </span>
        <span className='Body__Style'>{bodyText}</span>
    </div>
  )
}

export default InfoDivs;