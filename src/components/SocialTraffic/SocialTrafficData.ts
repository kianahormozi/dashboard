
export interface DataRow {
    socialNetwork: string; 
    users: number;
    newUsers: number;
    sessions: number;
    bounceRate: string;
    pagesPerSession: number;
    avgSessionDuration: string; 
  }
  
  export const weekData: DataRow[] = [
    { socialNetwork: 'Facebook', users: 3397, newUsers: 422, sessions: 2584, bounceRate: '30.35%', pagesPerSession: 2.5, avgSessionDuration: '00:01:05' },
    { socialNetwork: 'Twitter', users: 2397, newUsers: 422, sessions: 2584, bounceRate: '30.35%', pagesPerSession: 2.5, avgSessionDuration: '00:01:05' },
    { socialNetwork: 'LinkedIn', users: 1397, newUsers: 422, sessions: 2584, bounceRate: '30.35%', pagesPerSession: 2.5, avgSessionDuration: '00:01:05' },
    { socialNetwork: 'YouTube', users: 4397, newUsers: 422, sessions: 2584, bounceRate: '30.35%', pagesPerSession: 2.5, avgSessionDuration: '00:01:05' },
    { socialNetwork: 'Pinterest', users: 597, newUsers: 422, sessions: 2584, bounceRate: '30.35%', pagesPerSession: 2.5, avgSessionDuration: '00:01:05' },
  ];
  
  export const monthData = [...weekData.map(row => ({ ...row, users: row.users + 1000 , newUsers: row.newUsers + 1000 }))];
  export const yearData = [...weekData.map(row => ({ ...row, users: row.users + 2000 }))];
  
  export const columns: { id: keyof DataRow; label: string; align?: 'right' }[] = [
    { id: 'socialNetwork', label: 'Social Network' },
    { id: 'users', label: 'Users', align: 'right' },
    { id: 'newUsers', label: 'New Users', align: 'right' },
    { id: 'sessions', label: 'Sessions', align: 'right' },
    { id: 'bounceRate', label: 'Bounce Rate', align: 'right' },
    { id: 'pagesPerSession', label: 'Pages / Session', align: 'right' },
    { id: 'avgSessionDuration', label: 'Avg. Session Duration', align: 'right' },
  ];
  