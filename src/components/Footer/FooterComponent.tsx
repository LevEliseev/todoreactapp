import React from 'react';

import { FooterStyledComponents } from '../../AppStyles';
import gitIcon from '../../source/images/footer_images/github-icon.svg';
import vkIcon from '../../source/images/footer_images/vk-icon.svg';
import linkedinIcon from '../../source/images/footer_images/linkedin-icon.svg';

const FooterComponent: React.FC = () => {
    return (
        <FooterStyledComponents.FooterDiv>
            <FooterStyledComponents.ContactDiv>
                <FooterStyledComponents.ContactListUl>
                    <li><a href="https://github.com/LevEliseev" target="_blank" rel="noopener noreferrer" title="GitHub"><img src={gitIcon} alt="GitHub" /></a></li>
                    <li><a href="https://vk.com/id162365432" target="_blank" rel="noopener noreferrer" title="Vkontakte"><img src={vkIcon} alt="Vkontakte" /></a></li>
                    <li><a href="https://www.linkedin.com/in/lev-eliseev-689388188/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><img src={linkedinIcon} alt="LinkedIn" /></a></li>
                </FooterStyledComponents.ContactListUl>
            </FooterStyledComponents.ContactDiv>
        </FooterStyledComponents.FooterDiv>
    );
}

export default FooterComponent;
