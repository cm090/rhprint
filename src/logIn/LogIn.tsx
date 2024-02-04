import Button from "@mui/joy/Button";
import CssBaseline from "@mui/joy/CssBaseline";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { performLogIn, setListener } from "../apiConnector/papercutApi";
import "./styles.css";
import { Helmet } from "react-helmet";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const apiCallback = (e: ApiResult) => {
      setIsWaiting(false);
      console.log(e);
      if (!e.success) {
        setError(e.error || "Error logging in");
      } else {
        nav("/");
      }
    };
    setListener(apiCallback);
  }, [nav]);

  return (
    <>
      <Helmet>
        <title>Login | RHprint</title>
      </Helmet>
      <main className="pos-middle">
        <CssBaseline />
        <Sheet
          sx={{
            width: 300,
            mx: "auto",
            my: 4,
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome to RHprint!</b>
            </Typography>
            <Typography level="body-sm">Log in to continue.</Typography>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setError("");
              setIsWaiting(true);
              performLogIn(username, password);
            }}
            className="form-flex"
          >
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                placeholder="username@rose-hulman.edu"
                onChange={(e) => setUsername(e.target.value)}
                disabled={isWaiting}
                required
              />
            </FormControl>
            <FormControl sx={{ mt: 2 }}>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                disabled={isWaiting}
                required
              />
            </FormControl>
            <Button loading={isWaiting} sx={{ mt: 2 }} type="submit">
              Log in
            </Button>
            {error && (
              <Typography
                level="body-sm"
                sx={{ mt: 1, textAlign: "center", fontWeight: 600 }}
              >
                {error}
              </Typography>
            )}
          </form>
        </Sheet>
      </main>
    </>
  );
};

export default LogIn;
