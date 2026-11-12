// ---------- Tipos da API ----------

export interface Scrobble {
  track_name: string;
  artist_name: string;
  artist_mbid: string;
  album_name: string;
  album_mbid: string;
  track_mbid: string;
  track_url: string;
  loved: number;              // 0 ou 1
  nowplaying: boolean;
  date_uts: number | null;    // segundos, não milissegundos
  date_iso: string | null;
  image_url: string | null;
  tags: string;               // texto separado por vírgula
}

export interface ArtistProfile {
  name: string;
  image_url: string;
  tags: string;                    // separado por vírgula
  similar_artists: string;         // separado por vírgula
  bio_summary: string;
  bio_content: string;
  listeners_global: number;
  playcount_global: number;
  user_playcount: number;
  country_origin: string;
  year_formed: string;
  type: string;
  mbid: string;
  url_lastfm: string;
  url_wikipedia: string | null;
  url_musicbrainz: string | null;
}

export interface AlbumProfile {
  album_name: string;
  artist_name: string;
  album_mbid: string;
  artist_mbid: string;
  image_url: string;
  track_count: number;
  tracklist_names: string;         // separado por PONTO E VÍRGULA
  tags: string;
  release_date: string;
  wiki_summary: string;
  listeners_global: number;
  playcount_global: number;
  user_playcount: number;
  url_lastfm: string;
}

// ---------- Tipos do domínio ----------

export type Periodo = "tudo" | "30d" | "14d" | "7d" | "24h";

export type Status = "idle" | "loading" | "success" | "error" | "not-found";

export interface Entry<T> {
  data: T | null;
  status: Status;
  error: string | null;
  updatedAt: number | null;
}

export interface ItemRanking {
  chave: string;        // identificador único, ex.: "adele::hello"
  nome: string;         // o que aparece na tela
  subtitulo?: string;   // opcional, ex.: o artista de uma faixa
  contagem: number;
  imagem?: string | null;
}

export interface PontoMensal {
  mes: string;          // "2026-03"
  contagem: number;
}

export interface ArtistaSemelhante {
  nome: string;
  ouvido: boolean;      // existe nos teus scrobbles?
}

