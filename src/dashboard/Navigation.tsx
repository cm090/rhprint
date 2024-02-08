import { PrintSharp } from "@mui/icons-material";
import { Box, Stack, Typography, Button } from "@mui/joy";
import { performLogOut } from "../apiConnector/papercutApi";

const Navigation = ({
  index,
  setIndex,
}: {
  index: number;
  setIndex: (index: number) => void;
}) => {
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
            component="button"
            size="sm"
            onClick={() => setIndex(0)}
            aria-pressed={index === 0}
            sx={{ alignSelf: "center" }}
          >
            Home
          </Button>
          <Button
            variant="plain"
            color="primary"
            component="button"
            size="sm"
            onClick={() => setIndex(1)}
            aria-pressed={index === 1}
            sx={{ alignSelf: "center" }}
          >
            Queue
          </Button>
          <Button
            variant="plain"
            color="primary"
            component="button"
            size="sm"
            onClick={() => setIndex(2)}
            aria-pressed={index === 2}
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

  // return (
  //   <div className="Navigation">
  //     <Typography level="h1">RHprint</Typography>
  //     <Box sx={{ py: 2, pr: 2 }}>
  //       <List
  //         aria-label="Sidebar"
  //         sx={{
  //           "--ListItem-paddingLeft": "0px",
  //           "--ListItemDecorator-size": "64px",
  //           "--ListItem-minHeight": "32px",
  //           "--List-nestedInsetStart": "13px",
  //           [`& .${listItemDecoratorClasses.root}`]: {
  //             justifyContent: "flex-end",
  //             pr: "18px",
  //           },
  //         }}
  //       >
  //         <ListItem>
  //           <ListItemButton
  //             selected={index === 0}
  //             color={index === 0 ? "primary" : undefined}
  //             onClick={() => setIndex(0)}
  //           >
  //             <ListItemContent>Home</ListItemContent>
  //           </ListItemButton>
  //         </ListItem>
  //         <ListItem>
  //           <ListItemButton
  //             selected={index === 1}
  //             color={index === 1 ? "primary" : undefined}
  //             onClick={() => setIndex(1)}
  //           >
  //             <ListItemContent>Printing Queue</ListItemContent>
  //           </ListItemButton>
  //         </ListItem>
  //         <ListItem>
  //           <ListItemButton
  //             selected={index === 2}
  //             color={index === 2 ? "primary" : undefined}
  //             onClick={() => setIndex(2)}
  //           >
  //             <ListItemContent>How to Print</ListItemContent>
  //           </ListItemButton>
  //         </ListItem>
  //         <ListItem>
  //           <ListItemButton
  //             selected={index === 4}
  //             color={index === 4 ? "primary" : undefined}
  //             onClick={() => onLogOut()}
  //           >
  //             <ListItemContent>Log Out</ListItemContent>
  //           </ListItemButton>
  //         </ListItem>
  //       </List>
  //     </Box>
  //   </div>
  // );
};

export default Navigation;
