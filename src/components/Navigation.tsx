import { Container, List, ListItem } from "@mui/material"
import { MEGA_MENU } from "../services/Endpoint"
import axios from "axios"
import { useEffect, useState } from "react"
import { ApiRes } from "../types/APIResponse";
import { NavItem } from "../types/MegaMenuType";


const Navigation: React.FC = () => {
    const [nav,setNav]=useState<NavItem[]>([])
    const loadMegaMenu = async (): Promise<void> => {
        await axios.get<ApiRes>(MEGA_MENU).then((res) => {
            if (res?.status == 200) {
                setNav(res?.data?.data)
            }
        })
    }
    useEffect(() => {
        loadMegaMenu()
        console.log("nav",nav)
    }, [])
    return (<>
        <section>
          
            <Container maxWidth="xl">
                <nav>
                    <List>
                        <ListItem>
                            a1
                        </ListItem>
                    </List>
                </nav>
            </Container>
        </section>

    </>)
}
export default Navigation