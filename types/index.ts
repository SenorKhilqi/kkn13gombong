export interface User {
  id: string;
  username: string;
  role: 'user' | 'admin';
  created_at: string;
}

export interface News {
  id: string;
  title: string;
  slug: string;
  content: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
  author_id: string | null;
  author?: {
    username: string;
  };
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}

export interface NewsFormData {
  title: string;
  content: string;
  image_url?: string;
}
