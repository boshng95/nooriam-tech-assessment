import { useEffect } from 'react'
import { Flex, Image, useBreakpointValue } from "@chakra-ui/react"
import { Link } from "@tanstack/react-router"

import Logo from "/assets/images/fastapi-logo.svg"
import UserMenu from "./UserMenu"
import { ToastContainer, toast, Zoom } from 'react-toastify';

const WS_BASE = import.meta.env.VITE_WS_URL

function Navbar() {
  const display = useBreakpointValue({ base: "none", md: "flex" })

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      console.error("No token found");
      return;
    }

    const ws = new WebSocket(
      `${WS_BASE}/api/v1/users/signup/ws?token=${token}`
    )

    ws.onmessage = (event) => {
      toast.success(event.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <Flex
      display={display}
      justify="space-between"
      position="sticky"
      color="white"
      align="center"
      bg="bg.muted"
      w="100%"
      top={0}
      p={4}
    >
      <Link to="/">
        <Image src={Logo} alt="Logo" maxW="3xs" p={2} />
      </Link>
      <Flex gap={2} alignItems="center">
        <UserMenu />
      </Flex>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </Flex>
  )
}

export default Navbar
