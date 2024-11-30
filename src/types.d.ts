export interface ITheme {
  title: string;
  icon: IconType;
}

export interface IMovie {
  id: number;
  poster_path: string;
  original_title: string;
  name: string;
  overview: string;
  backdrop_path: string
}

export interface IGenre {
  id: number;
  name: string;
}

export interface DeatilProps {
  id: number;
  title: string;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  genres: IGenre[];
  release_date: string;
  runtime: number;
  // credits: {
  //   cast: ICast[];
  //   crew: ICrew[];
  // };
  // videos: {
  //   results: IVideo[];
  // };
}

export interface GetShowsParams {
  category?: string;
  type?: string;
  searchQuery?: string;
  page?: number;
  showSimilarShows?: boolean;
  id?: number;
}