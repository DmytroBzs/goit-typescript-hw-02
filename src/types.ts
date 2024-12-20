export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  [key: string]: any;
}

export interface UnsplashApiResponse {
  results: Image[];
  total: number;
  total_pages: number;
}
