import { Flex, Input } from "@mantine/core"
import { UserCard } from "../../entities/userCard"
import { IconAt } from '@tabler/icons-react';
import { useClients } from "./hooks";
const Clients = () => {
    const { isLoading, filteredUsers, search, setSearch } = useClients();
    if (isLoading) {
        return <h1>Загрузка</h1>
    }

    return (
        <Flex gap="xl"
            justify="center"
            align="center"
            direction="column" style={{ width: "100%" }}>
            <Input icon={<IconAt />} placeholder="Введите имя пользователя" style={{ width: "70%" }} value={search} onChange={(e) => setSearch(e.target.value)} />
            {filteredUsers?.map(elem => {
                return (
                    <UserCard id={elem.id} email={elem.email} status={elem.status} active={elem.active} key={elem.id} />
                )
            }
            )}
        </Flex>
    )
}

export default Clients;