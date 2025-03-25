import { Button, colors, Container, List, ListItem } from "@mui/material"
import { MEGA_MENU } from "../services/Endpoint"
import axios from "axios"
import { useEffect, useState } from "react"
import { ApiRes } from "../types/APIResponse";
import { NavItem } from "../types/MegaMenuType";
import { Link } from "react-router-dom";
import layout from "../assets/css/layout.module.css"

const Navigation: React.FC = () => {
    const [nav, setNav] = useState<NavItem[]>([])
    const loadMegaMenu = async (): Promise<void> => {
        await axios.get<ApiRes>(MEGA_MENU).then((res) => {
            if (res?.status == 200) {
                setNav(res?.data?.data)
            }
        })
    }
    useEffect(() => {
        loadMegaMenu()
        console.log("nav", nav)
    }, [])
    return (<>
        <section>

            <Container maxWidth="xl">
                <nav className={`${layout.center} ${layout.dFlex} ${layout.alignCenter}`}>
                    <List sx={{display: "flex"}}>
                        {
                            nav?.length > 0 && nav?.map((e, i) => (
                                <ListItem key={i} sx={{width: "auto"}}>
                                    <Button sx={{color: "#333", fontWeight:"500"}} variant="text" component={Link} to={e?.slug}>{e?.name}</Button>

                                </ListItem>

                            ))
                        }
                    </List>
                </nav>
            </Container>
        </section>

    </>)
}
export default Navigation