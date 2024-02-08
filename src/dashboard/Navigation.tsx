import { PrintSharp } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import { performLogOut } from "../apiConnector/papercutApi";

const Navigation = ({ page }: { page: string }) => {
  const onLogOut = () => {
    performLogOut(localStorage.getItem("user") as string);
  };

  return (
    <Box
      sx={{
        p: 2,
        gap: 2,
        bgcolor: "background.surface",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gridColumn: "1 / -1",
        borderBottom: "1px solid",
        borderColor: "divider",
        position: "sticky",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ display: "flex" }}
        >
          <PrintSharp />
          <Typography level="h3" sx={{ ml: 1, pr: 3 }}>
            RHprint
          </Typography>
          <Button
            variant="plain"
            color="primary"
            component={Link}
            to="/"
            size="sm"
            aria-pressed={page === "home"}
            sx={{ alignSelf: "center" }}
          >
            Home
          </Button>
          <Button
            variant="plain"
            color="primary"
            component={Link}
            to="/queue"
            size="sm"
            aria-pressed={page === "queue"}
            sx={{ alignSelf: "center" }}
          >
            Queue
          </Button>
          <Button
            variant="plain"
            color="primary"
            component={Link}
            to="/help"
            size="sm"
            aria-pressed={page === "help"}
            sx={{ alignSelf: "center" }}
          >
            How to print
          </Button>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1.5,
            alignItems: "center",
          }}
        >
          <Typography level="body-sm">
            Hi, {localStorage.getItem("user")}!
          </Typography>
          <Button
            variant="plain"
            color="primary"
            component="button"
            size="sm"
            onClick={onLogOut}
            sx={{ alignSelf: "center" }}
          >
            Sign out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
