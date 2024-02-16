import { Box, List, ListItem, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import * as images from "../../img/help";
import HelpGallery from "./HelpGallery";

const LinkAndTypography = () => (
  <Box sx={{ p: 3, maxHeight: "calc(100vh - 64px)", overflowY: "auto" }}>
    <Typography
      id="requirements"
      level="h2"
      fontSize="title-lg"
      mb={1}
      sx={{ scrollMarginTop: 100 }}
    >
      Requirements
    </Typography>
    <Typography>
      Printing at Rose-Hulman requires a connection to the campus network.
      Students must be either on campus connected to <strong>eduroam</strong> or
      connected via VPN (
      <Link
        to="https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01278/en-us"
        target="_blank"
        className="help-link"
      >
        install here
      </Link>
      ). This connection is required for all of the following steps.
    </Typography>
    <Typography>&nbsp;</Typography>
    <Typography>&nbsp;</Typography>
    <Typography
      id="connecting-to-printers"
      level="h2"
      fontSize="title-lg"
      mb={1}
      sx={{ scrollMarginTop: 100 }}
    >
      Connecting to Printers
    </Typography>
    <Typography
      id="print-queues"
      level="h3"
      fontSize="title-md"
      sx={{ scrollMarginTop: 100 }}
    >
      Print Queues
    </Typography>
    <Typography>
      Printing at Rose-Hulman works by sending print requests to print queues.
      Students must connect to any queue that has a desired printer. There are 3
      print queues for students to use on campus:
    </Typography>
    <List component="ol">
      <ListItem sx={{ display: "inline" }}>
        <Typography>
          <strong>RHIT BW Printing:</strong> print queue for all student black
          and white HP printers
        </Typography>
        <Typography>
          Use this print queue to print to any of the following printers:
        </Typography>
        <img
          src={images.printerLists.bw as string}
          alt="BW Printer List"
          width="80%"
        ></img>
      </ListItem>
      <ListItem sx={{ display: "inline" }}>
        <Typography>
          <strong>RHIT Ricoh Printing:</strong> print queue for student black
          and white Ricoh printer in the Union
        </Typography>
        <img
          src={images.printerLists.ricoh as string}
          alt="Ricoh Printer List"
          width="40%"
        ></img>
      </ListItem>
      <ListItem sx={{ display: "inline" }}>
        <Typography>
          <strong>RHIT Library Color Printing:</strong> print queue for the
          color printer located on the main floor of the Logan Library (for
          limited use)
        </Typography>
        <img
          src={images.printerLists.color as string}
          alt="Library Color Printer List"
          width="40%"
        ></img>
      </ListItem>
    </List>
    <Typography>&nbsp;</Typography>
    <Typography
      id="connecting-on-rhit-laptops"
      level="h3"
      fontSize="title-md"
      mb={0}
      sx={{ scrollMarginTop: 100 }}
    >
      Connecting on RHIT Laptops
    </Typography>
    <List sx={{ "--_List-markerType": "decimal", pl: 4 }}>
      <ListItem sx={{ display: "list-item" }}>
        Type "<strong>\\print</strong>" in the Windows search bar and press "
        <strong>Enter</strong>" to run the Print Command.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        In the File Explorer window, select "<strong>RHIT BW Printing</strong>
        ", "<strong>RHIT Ricoh Printing</strong>" or "
        <strong>RHIT Library Color Printing</strong>" and double-click to
        install. You only need to install the print queue associated with the
        printer you want to use, but you can also install all three at once.
      </ListItem>
    </List>
    <HelpGallery imgs={images.connecting}></HelpGallery>
    <Typography>&nbsp;</Typography>
    <Typography
      id="connecting-on-ubuntu-linux"
      level="h3"
      fontSize="title-md"
      sx={{ scrollMarginTop: 100 }}
    >
      Connecting on Ubuntu (Linux)
    </Typography>
    <Typography>
      These directions were taken from the EIT knowledge base. For any issues in
      this section please contact EIT.
    </Typography>
    <List sx={{ "--_List-markerType": "decimal", pl: 4 }}>
      <ListItem sx={{ display: "list-item" }}>
        From your desktop, move your cursor to the lower left-hand corner of the
        screen and click on “<strong>Show Applications</strong>” (Icon with nine
        dots).
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        A list of your applications should appear. Find the icon labeled “
        <strong>Terminal</strong>” or type “<strong>Terminal</strong>” into the
        search bar and press the enter key on your keyboard.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        Once you have an instance of Terminal open, type in the following
        command as written:{" "}
        <strong>sudo apt install smbclient python3-smbc</strong>. This will
        install the package required to connect to the printer queues. You may
        be prompted for your password to your local user account. Type “
        <strong>Y</strong>” for any yes or no prompts you receive.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        Once the installation is done, go back to the “
        <strong>Show Applications</strong>” menu and either find the icon
        labeled “<strong>Settings</strong>” or type “<strong>Settings</strong>”
        into the search bar and press the enter key.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        A window should appear with a list of settings to choose from. Scroll
        down until you find the setting labeled “<strong>Printers</strong>” and
        click on it.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        There should be two options in the printer menu. Click on “
        <strong>Additional Printer Settings…</strong>” A smaller window should
        appear with the option to add a printer. Click “<strong>Add</strong>”.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        Another window should appear asking you to select a device. From the
        list click the drop-down menu labeled “<strong>Network Printer</strong>”
        and click on “<strong>Windows Printer via SAMBA</strong>”.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        In the field labeled <strong>smb://</strong> type the following network
        address in: <strong>print.rose-hulman.edu/</strong>. (Please note: Make
        sure the forward slash is present, or you will get an error). Once you
        enter the network address, click the button next to the field labeled “
        <strong>Browse</strong>”.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        A new window should appear asking you to log in. First, you will input
        your <strong>Rose-Hulman username</strong> into the Username field.
        Second, input the following as written into the Domain field:{" "}
        <strong>rose-hulman.edu</strong>. Finally, input your Rose-Hulman
        account password into the password field. Click the “<strong>OK</strong>
        ” button or press the enter key when finished.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        A list of printers should appear in a new window (Note: You can expand
        the window by left-clicking the edges of the window and dragging).
        Scroll down until you find the following names:{" "}
        <strong>RHIT BW Printing</strong> and{" "}
        <strong>RHIT Library Color Printing</strong>. Click on the name that is
        necessary to you and click “<strong>OK</strong>”.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        You should be taken back to the window asking to “
        <strong>Select Device</strong>”. Go to the section that is labeled “
        <strong>Authentication</strong>” and click on the option “
        <strong>Set authentication details now</strong>”.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        In the “<strong>Password</strong>” field, input your Rose-Hulman account
        password. In the “<strong>Username</strong>” field type the following:{" "}
        <strong>rose-hulman.edu\username</strong>. (Note: Replace{" "}
        <strong>username</strong> with your Rose Hulman username). Once you are
        finished, click <strong>Forward</strong>.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        A new window should open asking you to “<strong>Choose Driver</strong>
        ”. From this menu you will select “
        <strong>Select Printer form database</strong>”, find and click “
        <strong>Generic</strong>” on the “<strong>Makes</strong>” list, then
        click <strong>Forward</strong>.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        You will be presented with a list labeled “<strong>Models</strong>”.
        Find and click on “<strong>IPP Everywhere</strong>”, then click on the
        following driver in the <strong>Drivers</strong> list:{" "}
        <strong>Generic IPP Everywhere Printer [en]</strong>. Once you have
        selected it, click forward.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        For the next section, labeled “<strong>Installable Options</strong>”
        click “<strong>Duplexer Installed</strong>”. Then click{" "}
        <strong>Forward</strong>.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        A menu should appear with three fields labeled{" "}
        <strong>Printer name</strong>, <strong>Description</strong>, and{" "}
        <strong>Location</strong>. You only need to fill out the{" "}
        <strong>Printer name</strong> and <strong>Description</strong> fields.
        For the <strong>Printer name</strong> field, input{" "}
        <strong>RHITBW</strong> and/or <strong>RHITColor</strong> so they are
        easy to find when adding both queues. As for the Description, you may
        put whatever will help you distinguish the two print queues apart. Once
        you are finished, click the button labeled “<strong>Apply</strong>”.
      </ListItem>
    </List>
    <Typography>&nbsp;</Typography>
    <Typography
      id="connecting-on-mac"
      level="h3"
      fontSize="title-md"
      sx={{ scrollMarginTop: 100 }}
    >
      Connecting on Mac
    </Typography>
    <Typography>
      These directions were taken from the EIT knowledge base. For any issues in
      this section please contact EIT.
    </Typography>
    <List sx={{ "--_List-markerType": "decimal", pl: 4 }}>
      <ListItem sx={{ display: "list-item" }}>
        Click on the Apple icon on the upper left-hand corner of the screen.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        Choose the option “<strong>System Settings</strong>” from the drop-down
        menu.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        A window should appear with multiple options on the left side. Move your
        cursor to the left side and scroll down until you find “
        <strong>Printers & Scanners</strong>”. Click on it.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        A menu should be displayed with a list of printers. Click on “
        <strong>Add Printer, Scanner, or Fax</strong>”.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        A window should appear with a list of printers to connect to. If you do
        not see a list, move your cursor to the top of the window and choose the
        first option on the left labeled “<strong>Default</strong>
        ”.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        The following two printers should appear: “
        <strong>rhit bw printing</strong>” and “
        <strong>rhit library color printing</strong>”. Click on what you require
        and go to the lower right-hand corner of the window and click “
        <strong>Add</strong>”.
      </ListItem>
    </List>
    <Typography>&nbsp;</Typography>
    <Typography
      id="connecting-on-other-devices"
      level="h3"
      fontSize="title-md"
      sx={{ scrollMarginTop: 100 }}
    >
      Connecting on Other Devices
    </Typography>
    <Typography>
      Install the print profile for your device{" "}
      <Link
        to="http://print.rose-hulman.edu:9163/client-setup/known-host/ios.html"
        target="_blank"
        className="help-link"
      >
        here
      </Link>
      .
    </Typography>
    <Typography>&nbsp;</Typography>
    <Typography>&nbsp;</Typography>
    <Typography
      id="printing"
      level="h2"
      fontSize="title-lg"
      mb={1}
      sx={{ scrollMarginTop: 100 }}
    >
      Printing
    </Typography>
    <Typography
      id="printing-on-rhit-laptops"
      level="h3"
      fontSize="title-md"
      sx={{ scrollMarginTop: 100 }}
    >
      Printing on RHIT Laptops
    </Typography>
    <Typography>
      Using the print option from your application, select the appropriate
      student print queue: "RHIT BW Printing" for HP printing in B&W, "RHIT
      Ricoh Printing" for Ricoh printing in B&W, or "RHIT Library Color
      Printing" for printing in color.
    </Typography>
    <Typography>&nbsp;</Typography>
    <Typography
      id="printing-on-ubuntu-linux"
      level="h3"
      fontSize="title-md"
      sx={{ scrollMarginTop: 100 }}
    >
      Printing on Ubuntu (Linux)
    </Typography>
    <List sx={{ "--_List-markerType": "decimal", pl: 4 }}>
      <ListItem sx={{ display: "list-item" }}>
        In the application of your choice, press the <strong>Control</strong>{" "}
        key and the <strong>P</strong> key at the same time to open the printing
        menu.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        Click on the drop-down menu labeled “<strong>Printer</strong>”. Make
        sure that either “<strong>RHITBW</strong>” or “
        <strong>RHITColor</strong>” is selected (whichever is required) and
        click “<strong>Print</strong>”.
      </ListItem>
    </List>
    <Typography>&nbsp;</Typography>
    <Typography
      id="printing-on-mac"
      level="h3"
      fontSize="title-md"
      sx={{ scrollMarginTop: 100 }}
    >
      Printing on Mac
    </Typography>
    <List sx={{ "--_List-markerType": "decimal", pl: 4 }}>
      <ListItem sx={{ display: "list-item" }}>
        In the application of your choice, press the command key and the P key
        at the same time to display the printing options.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        Click on the drop-down menu labeled “<strong>Printer</strong>” and
        choose “<strong>rhit bw printing</strong>” or “
        <strong>rhit library color printing</strong>” (whichever is required).
        Then click “<strong>Print</strong>”.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        You should be prompted to enter your credentials. In the field labeled “
        <strong>Name</strong>” you will need to input your Rose-Hulman username.
        In the password field, you will enter Rose-Hulman account password.
        Then, click OK or press the “<strong>Return</strong>” key on your
        keyboard. (Note: you can click on “
        <strong>Remember this password in my keychain</strong>”, so you won’t
        have to enter your credentials every time you print).
      </ListItem>
    </List>
    <Typography>&nbsp;</Typography>
    <Typography>&nbsp;</Typography>
    <Typography
      id="using-rhprint"
      level="h2"
      fontSize="title-lg"
      mb={1}
      sx={{ scrollMarginTop: 100 }}
    >
      Using RHprint
    </Typography>
    <Typography>
      Now you are ready to navigate to RHprint and sign in using your Rose
      credentials. Upon sign in, you should be redirected to the home page.
    </Typography>
    <Typography>&nbsp;</Typography>
    <Typography
      id="selecting-a-printer"
      level="h3"
      fontSize="title-md"
      sx={{ scrollMarginTop: 100 }}
    >
      Selecting a Printer
    </Typography>
    <List sx={{ "--_List-markerType": "decimal", pl: 4 }}>
      <ListItem sx={{ display: "list-item" }}>
        Use the printer list or search bar to find the printer you want to print
        to.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        The name of the printer you selected should now appear at the top of the
        screen. All of your current print jobs will be listed. Note that a
        printer will only show the print jobs on its associated print queue.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        Click on the "<strong>Show map</strong>" button to see where the printer
        is located. Verify the location of the printer you selected.
      </ListItem>
    </List>
    <HelpGallery imgs={images.select}></HelpGallery>
    <Typography>&nbsp;</Typography>
    <Typography
      id="releasing-a-print-job"
      level="h3"
      fontSize="title-md"
      sx={{ scrollMarginTop: 100 }}
    >
      Releasing a Print Job
    </Typography>
    <List sx={{ "--_List-markerType": "decimal", pl: 4 }}>
      <ListItem sx={{ display: "list-item" }}>
        For the print job you want to release, click on the "
        <strong>Print</strong>" button to release it.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        Click "<strong>Refresh Queue</strong>" to verify that the print job was
        released.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        Don't forget to collect your print job from the printer!
      </ListItem>
    </List>
    <HelpGallery imgs={images.release}></HelpGallery>
    <Typography>&nbsp;</Typography>
    <Typography
      id="canceling-a-print-job"
      level="h3"
      fontSize="title-md"
      sx={{ scrollMarginTop: 100 }}
    >
      Canceling a Print Job
    </Typography>
    <List sx={{ "--_List-markerType": "decimal", pl: 4 }}>
      <ListItem sx={{ display: "list-item" }}>
        For the print job you want to cancel, click on the "
        <strong>Cancel</strong>" button to cancel it.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        Click "<strong>Refresh Queue</strong>" to verify that the print job was
        canceled.
      </ListItem>
    </List>
    <HelpGallery imgs={images.cancel}></HelpGallery>
  </Box>
);

export default LinkAndTypography;
