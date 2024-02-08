import {
  Button,
  CssBaseline,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
} from "@mui/joy";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { performLogIn } from "../apiConnector/papercutApi";
import "./styles.css";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const nav = useNavigate();

  const logIn = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsWaiting(true);
    performLogIn(username, password).then((e: ApiResult) => {
      setIsWaiting(false);
      if (e.result.success && e.result.realname && e.result.authCookie) {
        localStorage.setItem("user", e.result.realname);
        localStorage.setItem("token", e.result.authCookie.split(":")[1]);
        nav("/");
      } else {
        setError(e.result.error as string);
      }
    });
  };

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
          <form onSubmit={logIn} className="form-flex">
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
