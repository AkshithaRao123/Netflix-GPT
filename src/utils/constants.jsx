export const NETFLIX_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png";

export const BACKGROUND_IMAGE = "https://images.ctfassets.net/4cd45et68cgf/2LE7H5fpCAQdgcAwfB9V70/7aa53e72ad35d58d9850484e3c5ddfc0/Blog_16x9_Cover_3.png?w=2000"

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY,
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTEDD_LANGUAGES = [
  {identifier: "en", name: "English"},
  {identifier: "hi", name: "Hindi"},
  {identifier: "spa", name: "Spanish"},
]

export const cohereApiKey = import.meta.env.VITE_cohereApiKey;