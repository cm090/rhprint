import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import { listItemDecoratorClasses } from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import { performLogOut } from "../apiConnector/papercutApi";

const Navigation = ({
  index,
  setIndex,
}: {
  index: number;
  setIndex: (index: number) => void;
}) => {

  const onLogOut = () => {
    setIndex(4);
    console.log("Logging Out...");
    performLogOut(localStorage.getItem("user") as string);
  };

  return (
    <div className="Navigation">
      <Typography level="h1">RHPrint</Typography>
      <Box sx={{ py: 2, pr: 2 }}>
        <List
          aria-label="Sidebar"
          sx={{
            "--ListItem-paddingLeft": "0px",
            "--ListItemDecorator-size": "64px",
            "--ListItem-minHeight": "32px",
            "--List-nestedInsetStart": "13px",
            [`& .${listItemDecoratorClasses.root}`]: {
              justifyContent: "flex-end",
              pr: "18px",
            },
          }}
        >
          <ListItem>
            <ListItemButton
              selected={index === 0}
              color={index === 0 ? "primary" : undefined}
              onClick={() => setIndex(0)}
            >
              <ListItemContent>Home</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={index === 1}
              color={index === 1 ? "primary" : undefined}
              onClick={() => setIndex(1)}
            >
              <ListItemContent>Printing Queue</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={index === 2}
              color={index === 2 ? "primary" : undefined}
              onClick={() => setIndex(2)}
            >
              <ListItemContent>How to Print</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={index === 4}
              color={index === 4 ? "primary" : undefined}
              onClick={() => onLogOut()}
            >
              <ListItemContent>Log Out</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default Navigation;
