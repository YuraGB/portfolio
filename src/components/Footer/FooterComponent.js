import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

const FooterComponent = (props) => {
    return (
    <footer style={{height: "50px"}}>
        <SocialMediaIconsReact icon="facebook" iconSize={32} url="http://facebook.com/yura.gurianov"/>
        <SocialMediaIconsReact icon="instagram" iconSize={32} url="https://www.instagram.com/theyuhur"/>
        <SocialMediaIconsReact icon="github" iconSize={32} url="https://github.com/YuraGB"/>
        <SocialMediaIconsReact icon="linkedin" iconSize={32} url="https://www.linkedin.com/in/yurii-hurianov-685373172/"/>
    </footer>
    )
};

export default FooterComponent;