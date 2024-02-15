import { ListItem, ListItemButton } from "@mui/joy";

const NavItem = ({ label }: { label: string }) => {
  const scroll = () => {
    const section = document.getElementById(
      label.toLowerCase().replaceAll(" ", "-").replace(/[()]/g, "")
    );
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ListItem>
      <ListItemButton onClick={scroll}>{label}</ListItemButton>
    </ListItem>
  );
};

export default NavItem;
