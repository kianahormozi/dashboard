export type SocialMedia = "Twitter" | "Instagram" | "Facebook";
export type Timeframe = "Week" | "Month" | "Year";

export const metrics: Record<
    SocialMedia,
    Record<Timeframe, { posts: number; likes: number; newFollowers: number ; numbers: number}>
  > = {
    Twitter: {
      Week: { posts: 12, likes: 150, newFollowers: 20 , numbers: 2343 },
      Month: { posts: 50, likes: 1200, newFollowers: 150 , numbers: 2346 },
      Year: { posts: 600, likes: 15000, newFollowers: 1800 , numbers: 2349},
    },
    Instagram: {
      Week: { posts: 10, likes: 180, newFollowers: 25 , numbers: 2643 },
      Month: { posts: 40, likes: 1400, newFollowers: 200 , numbers: 1243},
      Year: { posts: 500, likes: 16000, newFollowers: 2000 , numbers: 2355 },
    },
    Facebook: {
      Week: { posts: 8, likes: 120, newFollowers: 15 , numbers: 9343},
      Month: { posts: 35, likes: 1000, newFollowers: 120 , numbers: 234 },
      Year: { posts: 450, likes: 14000, newFollowers: 1600 , numbers: 243 },
    },
  };

  export const calculatePercentage = (current: number, previous: number) => {
    return ((current - previous) / previous) * 100;
  };
