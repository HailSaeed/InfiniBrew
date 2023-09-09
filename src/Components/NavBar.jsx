import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useUserContext } from "./UserContext";

function NavBar() {
  const { Username, SetUsername } = useUserContext();
  const username = Username.split("@")[0];

  return (
    <div className="bg-slate-100 p-5 flex items-center gap-2">
      <Stack direction="row" spacing={2}>
        <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
      </Stack>
      <p>Welcome {username}</p>
    </div>
  );
}

export default NavBar;
