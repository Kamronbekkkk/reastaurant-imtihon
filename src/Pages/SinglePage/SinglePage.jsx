import { useLoaderData, Link } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import './SinglePage.css'

function SinglePage() {
  const singlePage = useLoaderData()
  return (
    <div className="singleMain">
      <div className="container">
        <div className="singleMain-inner">
          <Link className="link" to='/'>Go Back</Link>
          <img className="singleMain-inner__img" src={singlePage.imageCarousel.images[0].url} alt="" />
        </div>
        <div className="singleMain-inner__inner">
        <div className="singleMain-inner__box">
        <h2>{singlePage.restaurant.name}</h2>
          <div className="singleMain-inner__box-inner">
          <FaLocationDot className="location" />
          <p className="singleMain-inner__box-inner-p">{singlePage.restaurant.address.line1}</p>
          <p className="singleMain-inner__box-inner-p">{singlePage.restaurant.address.line2} |</p>
          <p>| Get Direction</p>
          </div>
          <div className="singleMain-inner__box-inner-time">
            <FaClock className="singleMain-inner__box-inner-time-icon" />
            <p>{singlePage.restaurant.hours}</p>
          </div>
          <div className="menu">
          <MdMenuBook className="menu-icon" />
           <p>Show Menu</p>
          </div>
        </div>
        <div className="singleMain-inner__box-2">
        <IoMenu className="burger-button" />
          <p className="singlePage-description">
            {singlePage.restaurant.description}
          </p>
        </div>
        </div>
        <div className="singleMain-inner__box-3">
          <h3>Available Time Slots</h3>
          <ul className="time">
            {singlePage.timeSlots.slice(0, 7).map((el, index) => (
              <li className={`time2 ${el.available ? 'time-true' : 'time-false'
                }`}
                key={index}
              >
                {el.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SinglePage;