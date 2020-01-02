export interface Movie {
  Title: string;
  Year: number;
  Runtime: string;
  Genre: string[];
  Director: string;
  Actors: string[];
  Writer: string[];
  Awards: string;
  Ratings: {
    where: string,
    value: string
  }[];
  Plot: string;
}
