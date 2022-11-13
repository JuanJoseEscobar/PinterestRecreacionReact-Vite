import { useState } from "react"
import { HoversTools } from "./HoversTools";
import { useFetchImage } from "./useFetchImage";


export const Card = ({url}) => {
  const [height, setHeight] = useState(0);
  const [hoverImg, setHoverImg] = useState('none');
  const {imaURL, isLoading} = useFetchImage(url);

  const setMaxHigh = ({target}) =>{
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

            <img src={imaURL} onLoad={setMaxHigh}  alt="" />

            <div className="Hover" style={hoverWindow.window} >
              <HoversTools/>
            </div>

            {isLoading && (
              <h2>Cargando...</h2>
            )}

            {!isLoading && (
              <div className="FooterCard" >
              
              <div className="contentCard">

                <div className='BtnProfile'>
                  <img className='ImgProfile' src="https://firebasestorage.googleapis.com/v0/b/reactpinterest-d9341.appspot.com/o/Users%2FAstro.png?alt=media&token=9adf5cd5-dd3d-4aa3-827b-d8c0e6b1dcee" alt="" />
                </div>

                <div className="NameProfile">
                  <a href=""><span>Astro</span></a>
                </div>

              </div>


            </div>
            )}

            

        </div>
    </div>
  )
}


