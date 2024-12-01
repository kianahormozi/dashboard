import React from 'react';
import Typography from '@mui/material/Typography';
import { useOutletContext } from 'react-router-dom';

interface DashboardContext {
  setHeaderText: (text: string) => void;
}

function Finance() {
  const { setHeaderText } = useOutletContext<DashboardContext>();

  React.useEffect(() => {
    setHeaderText('صفحه مالی'); // تنظیم متن هدر
  }, [setHeaderText]);

  return (
    <div>
      
      {/* محتوای دیگر */}
    </div>
  );
}

export default Finance;
