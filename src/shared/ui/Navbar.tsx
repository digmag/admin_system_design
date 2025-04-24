import { Navbar, NavLink, Box, Switch, Flex } from "@mantine/core";
import { Users, Calculator, SunHigh, Moon } from 'tabler-icons-react';
import { Link } from "react-router-dom";
import { useThemeProvider } from "../lib/providers/ThemeProvider";


const MyNavbar = () => {
    const {checked, setChecked} = useThemeProvider();

    return (
        <Navbar width={{base: 300 }} p="xs" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
                <Link to={"/"} style={{textDecoration:'none'}}>
                    <NavLink label="Пользователи" icon={<Users size={36} strokeWidth={2} color={!checked ? 'black' : 'white'} />} />
                </Link>
                <Link to={"/loans"} style={{textDecoration:'none'}}>
                    <NavLink label="Тарифы" icon={<Calculator size={36} strokeWidth={2} color={!checked ? 'black' : 'white'} />} />
                </Link>
            </Box>

            <Box style={{marginBottom:'1rem'}}>
                <Flex align="center" style={{justifyContent:'center'}}>
                <SunHigh
                    size={26}
                    strokeWidth={1.5}
                    color={!checked ? 'black' : 'white'}
                    fill={!checked ? 'black' : 'none'}
                    style={{ marginRight: '0.5rem' }}
                />
                <Switch
                    size="md"
                    color="indigo"
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                />
                <Moon
                    size={26}
                    strokeWidth={1.5}
                    color={checked ? 'white' : 'black'}
                    fill={checked ? 'white' : 'none'}
                    style={{ marginLeft: '0.5rem' }}
                />
                </Flex>
            </Box>
        </Navbar>
    );
  };

export default MyNavbar;