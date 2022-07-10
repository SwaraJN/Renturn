//footer 
import React from 'react'
import "../Style/Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
export const Footer = () => {
  return (
    <div>
         <footer>
<div className="footer ">
<div className="row muiicons">
<a href="https://www.facebook.com/ "target="_blank"><FacebookIcon/>  </a>
<a href="https://www.instagram.com/swaraj_nikam_501/"target="_blank"><InstagramIcon/> </a>
<a href=" https://wa.me/8446600448" target="_blank"><WhatsAppIcon/>  </a>
<a href="https://www.linkedin.com/in/swaraj-nikam-7889a4137/"target="_blank"><LinkedInIcon /> </a>
<a href="https://twitter.com/SRNikam_" target="_blank"><TwitterIcon/>   </a>
<a href="https://github.com/SwaraJN"target="_blank"><GitHubIcon/></a>

</div>
<div className="namesicon">
<div>Facebook</div>
<div> Instagram </div>
<div>Whatsapp </div>
<div>Linkedin </div>
<div>Twitter</div>
<div>github</div>

</div>
<div className="row">
<ul>
<li><a href="https://www.linkedin.com/in/swaraj-nikam-7889a4137/">Contact us</a></li>
<li><a href="https://www.linkedin.com/in/swaraj-nikam-7889a4137/">Our Services</a></li>
<li><a href="https://www.linkedin.com/in/swaraj-nikam-7889a4137/">Privacy Policy</a></li>
<li><a href="https://www.linkedin.com/in/swaraj-nikam-7889a4137/">Terms & Conditions</a></li>
<li><a href="https://www.linkedin.com/in/swaraj-nikam-7889a4137/">Career</a></li>
</ul>
</div>

<div className="row">
<p> swaraj Copyright © 2021 Renturn - All rights reserved || Designed By: Swaraj </p>
</div>
</div>
</footer>
    </div>
  )
}
