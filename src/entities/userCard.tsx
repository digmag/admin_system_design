import { Card, Group, Text } from "@mantine/core"
import { Client } from "../shared/lib/api/clients"
import { Link } from "react-router-dom"
import { useState } from "react";

export const UserCard = ({id, email, status, active}:Client) => {
    return(
        <Link to={`/user/${id}`} style={{width:"50%", textDecoration:"none"}}>        
            <Card style={{width:"100%", backgroundColor:active?"transparent":"#FF7373"}} withBorder>
                <Group style={{justifyContent:"space-between"}}>
                    <Text>{email}</Text>
                    <Text>{status==="EMPLOYEE"?"Работник":"Пользователь"}</Text>
                </Group>
            </Card>
        </Link>
   )
}