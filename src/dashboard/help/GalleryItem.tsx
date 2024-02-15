import Box from "@mui/joy/Box";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import ImageListItem from "@mui/material/ImageListItem";
import { useState } from "react";

const GalleryItem = ({item}:{item: HelpImage}) => {
    const [isVisible, setIsVisible] = useState(false);

    return(
        <Box>
            <ImageListItem key={item.id} onClick={()=>setIsVisible(true)}>
          <img
            src={item.imageName}
            alt={item.imageDesc}
            loading="lazy"
          />
        </ImageListItem>
        {isVisible && <Modal open={true} onClose={() => setIsVisible(false)}>
            <ModalDialog variant="soft" layout="center" color="primary">
                <ModalClose />
                <Typography component="h2" level="h4" fontWeight="lg" mb={1}>
                {item.imageDesc}
                </Typography>
                <img
                src={item.imageName}
                    alt={item.imageDesc}
                width="100%"
                />
            </ModalDialog>
        </Modal>}
    </Box>
    )
}

export default GalleryItem;