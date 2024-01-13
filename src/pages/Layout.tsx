import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { GameQuery } from "./HomePage";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div>
      <NavBar
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />
      <Box padding={2}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
