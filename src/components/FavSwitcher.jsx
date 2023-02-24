import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ADD_FAV, REMOVE_FAV } from "../redux/actions";

export const FavSwitcher = (props) => {
  const favourites = useSelector((state) => state.favs.favs);
  const dispatch = useDispatch();

  return (
    <span style={{ color: "white" }}>
      {favourites.find((el) => el === props.id) ? (
        <AiFillHeart
          onClick={() => {
            dispatch({ type: REMOVE_FAV, payload: props.id });
          }}
        />
      ) : (
        <AiOutlineHeart
          onClick={() => {
            dispatch({ type: ADD_FAV, payload: props.id });
          }}
        />
      )}
    </span>
  );
};
