import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

const ExtensionMissingError = () => {
  return (
    <div className="pos-middle">
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
          This extension is necessary to log in and release prints from RHprint
        </Typography>
        <Button
          variant="solid"
          size="md"
          color="primary"
          sx={{
            marginInline: "auto",
            alignSelf: "center",
            fontWeight: 600,
          }}
          onClick={() =>
            window.open("https://github.com/cm090/rhitweaks/releases/latest")
          }
        >
          Install RHITweaks
        </Button>
      </Card>
    </div>
  );
};

export default ExtensionMissingError;
