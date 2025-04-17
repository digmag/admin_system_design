import { Box, Button, Flex, Group, Title } from "@mantine/core"
import { useDisclosure } from '@mantine/hooks'
import { LoanList } from "../widgets/loanList/LoanList"
import { CreateLoanModal } from "../entities/loanModel/createLoanModal";

const Loans = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
        <CreateLoanModal opened={opened} onClose={close}/>
        <Flex gap="xl"
        justify="flex-start"
        align="center"
        direction="column" 
        style={{width:"100%"}}>
            <Box style={{width:"80%"}}>
                <Group style={{justifyContent:"flex-start", alignItems:"center"}}>
                    <Title> Тарифы на кредиты</Title>
                    <Button color="indigo" style={{marginLeft:"2vw"}} onClick={open}>Добавить новый тариф</Button>
                </Group>
                <LoanList/>
            </Box>
        </Flex>
        </>
    )
}

export default Loans;