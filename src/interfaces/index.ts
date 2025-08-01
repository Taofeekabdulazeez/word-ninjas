export interface GameStoreWord {
  phrase: string;
  extraLetters: string[];
}

export interface User {
  id: number;
  created_at: Date;
  first_name: string;
  last_name: string;
  total_points_won: number;
  highest_win_rows: number;
  total_rounds_won: number;
  high_score: number;
  rank: string;
  is_group_member: boolean;
}
