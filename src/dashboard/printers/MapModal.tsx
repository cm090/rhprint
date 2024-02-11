import { Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";

const MapModal = ({
  printerMap,
  setMapVisible,
}: {
  printerMap: string;
  setMapVisible: (mapVisible: boolean) => void;
}) => {
  return (
    <Modal open={true} onClose={() => setMapVisible(false)}>
      <ModalDialog variant="soft" layout="center" color="primary">
        <ModalClose />
        <Typography component="h2" level="h4" fontWeight="lg" mb={1}>
          Printer map
        </Typography>
        <img
          className="map-image"
          src={printerMap}
          alt="Printer map"
          width="100%"
        />
      </ModalDialog>
    </Modal>
  );
};

export default MapModal;
