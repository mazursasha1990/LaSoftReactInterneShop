import React from 'react';

import './index.css';
import { Typography, BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}))


function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState("recents")
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <section className="footer">
            <hr className="footer-seperator" />
            <section className="footer-social-media">
                <BottomNavigation
                    value={value}
                    onChange={handleChange}
                    className={classes.root}
                >
                    <BottomNavigationAction
                        label="Facebook"
                        value="facebook"
                        icon={<FacebookIcon />}
                    />
                    <BottomNavigationAction
                        label="Instagram"
                        value="instagram"
                        icon={<InstagramIcon />}
                    />
                    <BottomNavigationAction
                        label="YouTube"
                        value="youTube"
                        icon={<YouTubeIcon />}
                    />

                </BottomNavigation >


            </section>
            <section className="footer-info">
                <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
                    Internet Shop ReactJS Material UI
                </Typography>
            </section>
            <hr className="footer-seperator" />
        </section>
    )
}

export default Footer;