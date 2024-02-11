import Box from "@mui/joy/Box";
import HelpNav from "./HelpNav";
import HelpDetails from "./HelpDetails";

const Help = () => {
    return(<Box
        sx={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
        }}
      >
        <HelpNav />
        <HelpDetails />
      </Box>);
};

export default Help;