import { Button, Card, Typography } from "@mui/joy";
import { Helmet } from "react-helmet";

const ExtensionMissingError = () => (
  <>
    <Helmet>
      <title>Extension missing | RHprint</title>
    </Helmet>
    <div className="pos-middle flex-center">
      <Card
        color="primary"
        orientation="horizontal"
        size="md"
        variant="soft"
        sx={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography level="title-lg" sx={{ textAlign: "center" }}>
          RHITweaks extension missing
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          This extension is necessary to log in and release prints from RHprint.
          Please use the link below to install and return to this page.
        </Typography>
        <Button
          variant="solid"
          size="md"
          color="primary"
          sx={{
            marginInline: "auto",
            alignSelf: "center",
            fontWeight: 600,
            width: "100%",
            mt: 2,
          }}
          onClick={() =>
            window.open("https://github.com/cm090/rhitweaks/releases/latest")
          }
        >
          Install RHITweaks
        </Button>
        <Button
          variant="outlined"
          size="md"
          color="primary"
          sx={{
            marginInline: "auto",
            alignSelf: "center",
            fontWeight: 600,
            width: "100%",
          }}
          onClick={() => (window.location.href = "/")}
        >
          Return to homepage
        </Button>
      </Card>
    </div>
  </>
);

export default ExtensionMissingError;
