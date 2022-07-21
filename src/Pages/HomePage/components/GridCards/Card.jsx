import { useState } from "react"
import { HoversTools } from "./HoversTools";


export const Card = ({url}) => {
  const [height, setHeight] = useState(0);
  const [hoverImg, setHoverImg] = useState('none');

  const setMaxHigh = ({target}) =>{
    console.log(target.height)
    setHeight(target.height);

  }

  const hoverWindow = {
    window: {
      height: `${height}px`,
      display: hoverImg,
    },

    card: {
      height: `${height+50}px`,
      gridRowEnd: `span ${(height+50)/19 >> 0}`,
    }

  }

  const activeHover = () => {//scope nfn
    setHoverImg('');
  }
  const desactiveHover = () => {//scope nfn
    setHoverImg('none');
  }



  return (
    <div className="Card" style={hoverWindow.card}>
        <div className="image" onMouseEnter ={activeHover} onMouseLeave={desactiveHover}>
            <img src={url} onLoad={setMaxHigh}  alt="" />
            <div className="Hover" style={hoverWindow.window} >
              <HoversTools/>
            </div>
            <div className="FooterCard" ></div>
        </div>
    </div>
  )
}


