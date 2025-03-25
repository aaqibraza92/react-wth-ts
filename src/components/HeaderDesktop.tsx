import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { call, cart, envelop, user, wishlist } from "../assets/svg";
import { Link } from "react-router-dom";
import layout from "../assets/css/layout.module.css"
import { buttonLink } from "../assets/css/css";
import Navigation from "./Navigation";

const HeaderDesktop: React.FC = () => {
    return (<header style={{ paddingTop: "10px", paddingBottom: "10px" }}>
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
                        <Button className="" variant="text" sx={buttonLink}>
                            {user}
                        </Button>
                        <Button component={Link} to="/wishlist" variant="text" sx={buttonLink}>
                            {wishlist}
                        </Button>
                        <Button component={Link} to="/cart" variant="text" sx={buttonLink}>
                            {cart}
                        </Button>

                    </Box>

                </Grid>
            </Grid>

           
        </Container>
        <Navigation/>

    </header>)
}
export default HeaderDesktop

