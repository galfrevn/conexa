export interface Character {
  url: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  birth_year: string;
  gender: string;
  homeworld: string | null;
  films: string[];
  starships: string[];
}

export interface Movie {
  url: string;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
}

export interface Planet {
  url: string;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
}

export interface Starship {
  url: string;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
}

export interface StarwarsListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
