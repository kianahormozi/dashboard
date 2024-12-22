import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface SocialItem {
    socialicon: React.ElementType; 
    socialbackground: string;
    icontext: string;
    iconnumber: string;
  }
  
  export const socialItems: SocialItem[] = [
    {
      socialicon: FacebookOutlinedIcon ,
      socialbackground: "rgb(35, 102, 184)",
      icontext: "Likes",
      iconnumber: "5,461",
    },
    {
      socialicon: TwitterIcon ,
      socialbackground: "rgb(0, 171, 228)",
      icontext: "Followers",
      iconnumber: "5,461",
    },
    {
      socialicon: InstagramIcon ,
      socialbackground:
        "linear-gradient(to top, rgb(255, 193, 7) 0%, rgb(244, 67, 54) 31%, rgb(156, 39, 176) 65%, rgb(156, 39, 176) 100%)",
      icontext: "Followers",
      iconnumber: "5,461",
    },
    {
      socialicon: YouTubeIcon ,
      socialbackground: "rgb(227, 34, 18)",
      icontext: "Subscribers",
      iconnumber: "5,461",
    },
    {
      socialicon: PinterestIcon ,
      socialbackground: "rgb(227, 34, 18)",
      icontext: "Subscribers",
      iconnumber: "5,461",
    },
    {
      socialicon: LinkedInIcon ,
      socialbackground: "rgb(0, 124, 188)",
      icontext: "Followers",
      iconnumber: "5,461",
    },
  ];