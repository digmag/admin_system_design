import { Navbar, NavLink } from "@mantine/core";
import { Users, Calculator } from 'tabler-icons-react';
import { Link } from "react-router-dom";


const MyNavbar = () => {
    return (
        <Navbar width={{ base: 300 }} p="xs">
            <Link to={"/"}><NavLink label="Пользователи" icon={<Users size={36} strokeWidth={2} color={'black'}/>}/></Link>
            <Link to={"/loans"}><NavLink label="Тарифы" icon={<Calculator size={36} strokeWidth={2} color={'black'}/>}/></Link>
        </Navbar>
    );
  };

export default MyNavbar;