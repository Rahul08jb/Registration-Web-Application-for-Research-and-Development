import knitSultanpurImage from "../assets/yell-banner.jpg";
function Banner() {
  return (
    <div
    className=" relative"
    style={{
      backgroundImage: `url(${knitSultanpurImage})`,
      backgroundSize: "cover",
      backgroundRepeat : "no-repeat",
      backgroundPositionY : "-200px",
      height: "fit-content",
      padding : "1rem 0rem",
      minHeight : "250px",
      display: "flex",
      flexDirection : "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "white",
    }}
  >
    {/* <div className="absolute w-full h-full bg-black opacity-65" /> */}
  </div>
  )
}

export default Banner