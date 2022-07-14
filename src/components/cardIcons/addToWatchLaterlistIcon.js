import React, {useContext} from "react";

import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";

const MyPlaylistAddIcon = ({movie}) => {
    const context = useContext(MoviesContext);

    const handleAddToMustWatchList = (e) => {
        e.preventDefault();
        context.addToMustWatchList(movie);
    }
    return (
        <IconButton aria-label="add to must watch list" onClick={handleAddToMustWatchList}>
           
        </IconButton>
    )
};

export default MyPlaylistAddIcon;