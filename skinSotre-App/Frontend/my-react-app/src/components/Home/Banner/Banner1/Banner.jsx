import "./Banner.css"
const Banner = ({url}) => {
  return (
    <div>
        <div className="Banner">
            <img src={url} alt="" className="banner-img" />
        </div>
    </div>
  )
}

export default Banner