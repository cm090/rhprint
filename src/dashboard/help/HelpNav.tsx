import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function ExampleCollapsibleList() {
  const scroll = (id: string) => {
    const section = document.querySelector( id );
    section?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  return (
    <Box
    className="sidebar"
      sx={{
        pl: '24px',
        p: 2,
        bgcolor: "background.surface",
        borderRight: "1px solid",
        borderColor: "divider",
        maxHeight: "calc(100vh - 64px)",
        overflowY: "auto",
      }}
    >
      <List
        size="sm"
        sx={(theme) => ({
          // Gatsby colors
        //   '--joy-palette-primary-plainColor': '#8a4baf',
        //   '--joy-palette-neutral-plainHoverBg': 'transparent',
        //   '--joy-palette-neutral-plainActiveBg': 'transparent',
        //   '--joy-palette-primary-plainHoverBg': 'transparent',
        //   '--joy-palette-primary-plainActiveBg': 'transparent',
        //   [theme.getColorSchemeSelector('dark')]: {
        //     '--joy-palette-text-secondary': '#635e69',
        //     '--joy-palette-primary-plainColor': '#d48cff',
        //   },

          '--List-insetStart': '32px',
          '--ListItem-paddingY': '0px',
          '--ListItem-paddingRight': '16px',
          '--ListItem-paddingLeft': '21px',
          '--ListItem-startActionWidth': '0px',
          '--ListItem-startActionTranslateX': '-50%',

          [`& .${listItemButtonClasses.root}`]: {
            borderLeftColor: 'divider',
          },
          [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
            borderLeftColor: 'currentColor',
          },
          '& [class*="startAction"]': {
            color: 'var(--joy-palette-text-tertiary)',
          },
        })}
      >
        <ListItem sx={{ '--List-gap': '0px' }}>
          <ListItemButton onClick={()=>{scroll("#requirements")}}>Requirements</ListItemButton>
        </ListItem>
        {/* Connecting to Printers */}
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen(!open)}
            >
              <KeyboardArrowDown
                sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
              />
            </IconButton>
          }
        >
          <ListItem>
            <ListItemButton onClick={()=>{scroll("#c-to-p")}}>
            <Typography
              level="inherit"
              sx={{
                fontWeight: open ? 'bold' : undefined,
                color: open ? 'text.primary' : 'inherit',
              }}
            >
              Connecting To Printers
            </Typography>
            </ListItemButton>
          </ListItem>
          {open && (
            <List sx={{ '--ListItem-paddingY': '8px' }}>
              <ListItem>
                <ListItemButton onClick={()=>{scroll("#p-q")}}>Print Queues</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={()=>{scroll("#c-rl")}}>
                Connecting on RHIT laptop
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={()=>{scroll("#c-ul")}}>
                  Connecting on Ubuntu(Linux)
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={()=>{scroll("#c-m")}}>Connecting on Mac</ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
        {/* Printing */}
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen2(!open2)}
            >
              <KeyboardArrowDown
                sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
              />
            </IconButton>
          }
        >
          <ListItem>
            <ListItemButton onClick={()=>{scroll("#printing")}}>
            <Typography
              level="inherit"
              sx={{
                fontWeight: open ? 'bold' : undefined,
                color: open ? 'text.primary' : 'inherit',
              }}
            >
              Printing
            </Typography>
            </ListItemButton>
          </ListItem>
          {open2 && (
            <List sx={{ '--ListItem-paddingY': '8px' }}>
              <ListItem>
                <ListItemButton onClick={()=>{scroll("#printing-rhit")}}>
                Printing on RHIT Laptops
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={()=>{scroll("#printing-ubuntu")}}>
                  Printing on Ubuntu(Linux)
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={()=>{scroll("#printing-mac")}}>Printing on Mac</ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
        {/* Using RHprint */}
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen3(!open3)}
            >
              <KeyboardArrowDown
                sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
              />
            </IconButton>
          }
        >
          <ListItem>
            <ListItemButton onClick={()=>{scroll("#using")}}>
            <Typography
              level="inherit"
              sx={{
                fontWeight: open ? 'bold' : undefined,
                color: open ? 'text.primary' : 'inherit',
              }}
            >
              Using RHprint
            </Typography>
            </ListItemButton>
          </ListItem>
          {open3 && (
            <List sx={{ '--ListItem-paddingY': '8px' }}>
              <ListItem>
                <ListItemButton onClick={()=>{scroll("#selecting")}}>
                Selecting a Printer
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={()=>{scroll("#releasing")}}>
                  Releasing a Print Job
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={()=>{scroll("#canceling")}}>Canceling a Print Job</ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
      </List>
    </Box>
  );
}
