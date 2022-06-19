import { useState } from "react";

const FavorateButton = (props) => {
  const onFav = '★'
  const notFav = '☆'
  const [favorite, setFavorite] = useState(notFav);
  const handleFavorite = () => {
    setFavorite(favorite===onFav ? notFav : onFav);
    props.setFavorite(favorite===onFav ? false : true);
  }
  return(
    <>
      <button style={{
      width : '50px',
      height : '50px',
      backgroundColor : "white",
      border : 'none',
      fontSize : '40px',
      padding : 0,
      lineHeight : 0,
      }}
    onClick={handleFavorite}>{favorite}</button>
    </>
  );
}

export default FavorateButton;