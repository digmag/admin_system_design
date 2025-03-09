import { Flex, Title, Box, Text, Group, Button, Input } from "@mantine/core";
import { useBlockUserMutation, useGetUserQuery } from "../shared/lib/api/clients";
import { useNavigate, useParams } from "react-router-dom";
import { UsersBills } from "../widgets/usersBills/BillsList";
import { toast } from "react-toastify";
import { Wallpaper } from 'tabler-icons-react';
import { useState } from "react";

export const UserPage = () => {
    const { id } = useParams();
    const nav = useNavigate();
    const { data, isLoading } = useGetUserQuery(id!);
    const [trigger] = useBlockUserMutation();
    const [searchQuery, setSearchQuery] = useState("");

    if (isLoading) {
        return <h1>Загрузка...</h1>;
    }

    const onClick = () => {
        trigger(id!)
            .unwrap()
            .then(() => toast.success("Успешно заблокирован пользователь"))
            .catch(() => toast.error("Ошибка в блокировке пользователя"));
    };

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
