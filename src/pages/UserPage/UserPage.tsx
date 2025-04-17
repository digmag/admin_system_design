import { Flex, Title, Box, Text, Group, Button, Input } from "@mantine/core"
import { UsersBills } from "../../widgets/usersBills/BillsList"
import { Wallpaper } from "tabler-icons-react"
import { useUserPage } from "./hooks"

const UserPage = () => {
    const {isLoading, data, onClick, nav, searchQuery, setSearchQuery} = useUserPage();
    if (isLoading) {
        return <h1>Загрузка...</h1>;
    }
    return (
        <Flex gap="xl" justify="flex-start" align="center" direction="column" style={{ width: "100%" }}>
            <Box style={{ width: "80%" }}>
                <Group style={{ justifyContent: "space-between" }}>
                    <Title>Пользователь: {data?.email}</Title>
                    <Group>
                        {data?.active && <Button color="red" onClick={onClick}>Заблокировать</Button>}
                        <Button color="indigo" onClick={() => nav(-1)}>Назад</Button>
                    </Group>
                </Group>
                
                {!data?.active && <Text fz="xl">Статус: Заблокирован</Text>}
                <Input
                    icon={<Wallpaper />}
                    placeholder="Введите название счета"
                    style={{ width: "100%", marginTop:"2vh" }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <UsersBills searchQuery={searchQuery} />
            </Box>
        </Flex>
    );
};

export default UserPage;