import Box from "@mui/joy/Box";
import { ImageList } from "@mui/material";
import GalleryItem from "./GalleryItem";

const HelpGallery = ({imgs}:{imgs: HelpImage[]}) => {
    return(<Box>
        <ImageList cols={imgs.length}>
        {imgs.map((item) => (
            <GalleryItem item={item}></GalleryItem>
      ))}
        </ImageList>
      </Box>);
};

export default HelpGallery;