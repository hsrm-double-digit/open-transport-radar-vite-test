import { Box, Center, Flex, Heading, useColorMode, Avatar, IconButton, useDisclosure, Menu, MenuButton, MenuItem, MenuDivider, MenuList, Stack, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CloseIcon, HamburgerIcon, MoonIcon, QuestionOutlineIcon, SettingsIcon, SunIcon } from '@chakra-ui/icons';


function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    const prime = useColorModeValue("light", "dark")
    const sec = useColorModeValue("dark", "prlightimary")
    const avatarCol = useColorModeValue("brand.prim", "brand.dark")


    return (
        <Box >
            <Flex
                h="16"
                py="4"
                px="6"
                bg={prime}
                justify="space-between"
                borderBottom={1}
                borderStyle={'solid'}

                borderColor={'gray.200'}
            >
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <Center>
                    <Heading color={sec} size={["sm", "md", "xl"]}>
                        <NavLink to={"/"}>Open Transport Radar</NavLink>
                    </Heading>
                </Center>
                <Center display={{ base: 'none', md: 'flex' }}>
                    <Box mx={"2rem"} mr={"4rem"}>
                        <IconButton
                            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
                            onClick={toggleColorMode}
                            aria-label="Color mode switcher">
                        </IconButton>
                    </Box>
                    <Menu>
                        <MenuButton data-testid={"avatar-btn"}>
                            <Avatar bg={avatarCol}/>
                        </MenuButton>
                        <MenuList>

                            <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
                            <MenuItem icon={<QuestionOutlineIcon />}>Help</MenuItem>
                            <NavLink to={"/feedback"} ><MenuItem data-testid={"feedback-link"}>Contact</MenuItem></NavLink>
                            <MenuDivider />
                            <MenuItem color="red">Log Out</MenuItem>
                        </MenuList>
                    </Menu>
                </Center>

            </Flex>  {isOpen ? (
                <Box
                    pb={4}
                    display={{ md: 'none' }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={'gray.200'}>
                    <Stack as="nav" spacing={4} ml={"1rem"}>
                        <NavLink to={"/feedback"}>Contact</NavLink>
                        <nav onClick={toggleColorMode}>
                            {colorMode === "light" ? "Dark" : "Light"} Mode
                        </nav>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    )
}


export default Header