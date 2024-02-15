import { Box, List, ListItem, ListItemButton } from "@mui/joy";
import { useState } from "react";
import NavItem from "./NavItem";
import NavHeader from "./NavHeader";

export default function ExampleCollapsibleList() {
  const [openNestedList, setOpenNestedList] = useState([false, false, false]);
  const open = (index: number) =>
    setOpenNestedList(openNestedList.map((open, i) => i === index && !open));
  const scroll = (id: string) => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box
      className="sidebar"
      sx={{
        pl: "24px",
        p: 2,
        bgcolor: "background.surface",
        borderRight: "1px solid",
        borderColor: "divider",
        maxHeight: "calc(100vh - 64px)",
        overflowY: "auto",
      }}
    >
      <List size="sm" sx={{ "--ListItem-radius": "var(--joy-radius-sm)" }}>
        <ListItem sx={{ "--List-gap": "0px" }}>
          <ListItemButton
            onClick={() => {
              scroll("#requirements");
            }}
          >
            Requirements
          </ListItemButton>
        </ListItem>
        <NavHeader
          label="Connecting To Printers"
          open={openNestedList[0]}
          setOpen={() => open(0)}
        >
          <NavItem label="Print Queues" />
          <NavItem label="Connecting on RHIT Laptops" />
          <NavItem label="Connecting on Ubuntu (Linux)" />
          <NavItem label="Connecting on Mac" />
          <NavItem label="Connecting on Other Devices" />
        </NavHeader>
        <NavHeader
          label="Printing"
          open={openNestedList[1]}
          setOpen={() => open(1)}
        >
          <NavItem label="Printing on RHIT Laptops" />
          <NavItem label="Printing on Ubuntu (Linux)" />
          <NavItem label="Printing on Mac" />
        </NavHeader>
        <NavHeader
          label="Using RHprint"
          open={openNestedList[2]}
          setOpen={() => open(2)}
        >
          <NavItem label="Selecting a Printer" />
          <NavItem label="Releasing a Print Job" />
          <NavItem label="Canceling a Print Job" />
        </NavHeader>
      </List>
    </Box>
  );
}
