import { useContext } from "react";
import myphoto from "../assets/myimage.png";
import { ThemeContext } from "../context/ThemeContext";

const PhotoHolder = () => {
  const { themeColors, color } = useContext(ThemeContext);
  return (
    <div className="w-full h-full bg-green-200 flex items-center justify-center">
      <img
      className={`w-auto h-auto drop-shadow-md grayscale-75 rounded-b-full rounded-tr-full opacity-60`}
      src={myphoto}
      alt="PC"
    />
    </div>
  )
}

export default PhotoHolder