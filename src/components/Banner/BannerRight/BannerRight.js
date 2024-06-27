import './BannerRight.css'
import UserImg from "../../../assets/Mohitimg.png";

const BannerRight = () => {
  return (
    <div>
        <div className='banner-right-image'>
          <img src = {UserImg} alt = 'user' />
        </div>
    </div>
  )
}

export default BannerRight