import { Card, Group, Text } from "@mantine/core"
import { Transaction } from "../../api/transaction"
import { TypeBadge } from "./TypeBadge"
import { StatusBadge } from "./StatusBadge"

export const Bill = ({name, type, status, ...rst}: Transaction['from']) => {
    return (
        <Card>
            <Group>
                <Text>{name} <TypeBadge type={type} /> <StatusBadge status={status}/></Text>
            </Group>
        </Card>
    )
}