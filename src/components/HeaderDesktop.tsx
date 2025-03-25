import { Box, Container, Paper, Stack, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { call, cart, envelop, user, wishlist } from "../assets/svg";
import { Link } from "react-router-dom";
import layout from "../assets/css/layout.module.css"

const HeaderDesktop: React.FC = () => {
    return (<header >
        <Container maxWidth="xl">
            <Grid container className={`${layout.alignItemsCenter} ${layout.dFlex}`}>
                <Grid size={{ md: 4 }}>
                    <Box sx={{ display: "flex" }}>
                        <a style={{ marginRight: "5px" }} className={`${layout.alignItemsCenter} ${layout.dFlex}`} href="tel:+1 (646) 992-9024">{call} +1 (646) 992-9024</a>
                        <a className={`${layout.alignItemsCenter} ${layout.dFlex}`} href="tel:+1 (646) 992-9024">{envelop} info@belgiumwebnet.com</a>
                    </Box>

                </Grid>
                <Grid size={{ md: 4 }}>
                   <Link to="/"><img style={{ maxWidth: "250px" }} className={layout.imgFluid} src={require('../assets/img/black-logo.png')} alt="logo" /></Link> 

                </Grid>

                <Grid size={{ md: 4 }}>
                    <Box sx={{ display: "flex" }} className={layout.justifyContentEnd}>
                        <span>
                            {user}
                        </span>
                        <span>
                            <Link to="/wishlist">{wishlist}</Link>
                            
                        </span>
                        <span>
                            {
                                cart
                            }
                        </span>
                      
                    </Box>

                </Grid>
            </Grid>
        </Container>

    </header>)
}
export default HeaderDesktop

