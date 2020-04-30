import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

import classes from './Foter.module.css';

const FooterComponent = () => {
    return (
    <footer  className={classes.Footer}>
        <SocialMediaIconsReact icon="facebook" iconSize={32} url="http://facebook.com/yura.gurianov"/>
        <SocialMediaIconsReact icon="instagram" iconSize={32} url="https://www.instagram.com/theyuhur"/>
        <SocialMediaIconsReact icon="github" iconSize={32} url="https://github.com/YuraGB"/>
        <SocialMediaIconsReact icon="linkedin" iconSize={32} url="https://www.linkedin.com/in/yurii-hurianov-685373172/"/>
        <SocialMediaIconsReact icon="mail" iconSize={32} url="/contactMe"/>
    </footer>
    )
};

export default FooterComponent;