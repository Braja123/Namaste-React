// Url for api keys: https://console.cloud.google.com/apis/credentials?pli=1&project=react-native-course-377107
// Or you can search : youtube auth key
const GOOGLE_API_KEY = "AIzaSyAlxs43Uwfl2m5ZRXBBhr_WtUzBx2SVyPs";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
