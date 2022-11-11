import { useState } from "react";
const CardMovies = ({ movies }) => {
    const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = (event, id) => {
        document.querySelector(`#box-${id}`).style.display = "block"
   };
   const handleMouseLeave = (event, id) => {
        document.querySelector(`#box-${id}`).style.display = "none"
    };

   const boxStyle = {
        display: isHover ? 'block' : 'none',
   };
    return (
        <div className="color_card_container pb-3">
            <div className="container">
                <div className="movies_container row">
                <h1 className="pt-3 pb-3 text-white">Peliculas Populares</h1>
                {movies.map((movie, index) => (
                    <div key={index}  onMouseOver={(e) => handleMouseEnter(e, index)} 
                                      onMouseOut={(e) => handleMouseLeave(e, index)}
                    className="col-md-3 movie_detail">
                        <img src={movie.images.posterArt.url} alt="foto" width={"104%"}/>
                        <div className="text-white descripcion">
                            <p className="title">{movie.title}</p>
                            <div id={`box-${index}`} className="descripcion_detail"
                                style={boxStyle}
                            >
                                <p>{movie.releaseYear}</p>
                                <p>{movie.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
        </div>
      
    );
  };
  
  export default CardMovies;