import { Flex, Input } from "@mantine/core"
import { useGetAllClientsQuery } from "../shared/lib/api/clients"
import { UserCard } from "../entities/userCard"
import { IconAt } from '@tabler/icons-react';
import { useState } from "react";

const Clients = () => {
    const {data, isLoading}=useGetAllClientsQuery()
    const [search, setSearch] = useState("")
    if(isLoading){
        return <h1>Загрузка</h1>
    }

    const filteredUsers = data?.filter(user =>
        user.email.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <Flex gap="xl"
        justify="center"
        align="center"
        direction="column" style={{width:"100%"}}>
            <Input icon={<IconAt />}placeholder="Введите имя пользователя" style={{width:"70%"}} value={search} onChange={(e) => setSearch(e.target.value)} />
            {filteredUsers?.map(elem=>{
                return(
                    <UserCard id ={elem.id} email = {elem.email} status = {elem.status} active = {elem.active} key={elem.id}/>
                )
            }
            )}
        </Flex>
    )
}

export default Clients;