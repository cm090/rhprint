import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { Link, useRouteError } from "react-router-dom";

const PageNotFoundError = () => {
  const error = useRouteError() as { statusText?: string; message?: string };
  return (
    <div className="pos-middle">
      <Card
        color="primary"
        orientation="horizontal"
        size="md"
        variant="soft"
        sx={{
          width: 250,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography level="title-lg" sx={{ textAlign: "center" }}>
          404
        </Typography>
        <Typography level="body-sm" sx={{ textAlign: "center" }}>
          {error.statusText || error.message}
        </Typography>
        <Link to="/">
          <Button
            variant="solid"
            size="md"
            color="primary"
            sx={{ alignSelf: "center", fontWeight: 600 }}
          >
            Return to homepage
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default PageNotFoundError;
