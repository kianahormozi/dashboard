import React from 'react';
import Box from '@mui/material/Box';
import FacebookOverview from '../components/FacebookOverview';
import YouTubeSubscribers from '../components/YoutubeSubscribers';
import SocialTraffic from '../components/SocialTraffic';
import { useOutletContext } from 'react-router-dom';
import SocialMediaOverviews from '../components/SocialMediaOverviews';


interface DashboardContext {
  setHeaderText: (text: string) => void;
}

function SocialMedia() {
  const { setHeaderText } = useOutletContext<DashboardContext>();

  React.useEffect(() => {
    setHeaderText('شبکه‌های اجتماعی'); // تنظیم متن برای این صفحه
  }, [setHeaderText]);

  return (
    <Box>
        <SocialMediaOverviews />
        <FacebookOverview />
        <YouTubeSubscribers />
        <SocialTraffic />
    </Box>
  );
}

export default SocialMedia;
