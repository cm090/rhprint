import { KeyboardArrowDown } from "@mui/icons-material";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/joy";

const NavHeader = ({
  label,
  open,
  setOpen,
  children,
}: {
  label: string;
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
}) => {
  const scroll = () => {
    const section = document.getElementById(
      label.toLowerCase().replaceAll(" ", "-").replace(/[()]/g, "")
    );
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ListItem
      nested
      sx={{ my: 1 }}
      startAction={
        <IconButton
          variant="plain"
          size="sm"
          color="neutral"
          onClick={setOpen}
        >
          <KeyboardArrowDown
            sx={{ transform: open ? "initial" : "rotate(-90deg)" }}
          />
        </IconButton>
      }
    >
      <ListItem>
        <ListItemButton onClick={scroll}>
          <Typography
            level="inherit"
            sx={{
              fontWeight: open ? "bold" : undefined,
              color: open ? "text.primary" : "inherit",
            }}
          >
            {label}
          </Typography>
        </ListItemButton>
      </ListItem>
      {open && <List sx={{ "--ListItem-paddingY": "8px" }}>{children}</List>}
    </ListItem>
  );
};

export default NavHeader;
