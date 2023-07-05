const GOOGLE_API_KEY = "AIzaSyClF1qUUsS0kNkLA26-z76Vnh-9CJnnkJ8";

const MAX_VIDEO_RESULTS = 50;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=" +
  GOOGLE_API_KEY;
