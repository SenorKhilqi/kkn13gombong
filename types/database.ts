export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          username: string
          password_hash: string
          role: 'user' | 'admin'
          created_at: string
        }
        Insert: {
          id?: string
          username: string
          password_hash: string
          role?: 'user' | 'admin'
          created_at?: string
        }
        Update: {
          id?: string
          username?: string
          password_hash?: string
          role?: 'user' | 'admin'
          created_at?: string
        }
      }
      news: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          image_url: string | null
          created_at: string
          updated_at: string
          author_id: string | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          image_url?: string | null
          created_at?: string
          updated_at?: string
          author_id?: string | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string
          image_url?: string | null
          updated_at?: string
          author_id?: string | null
        }
      }
    }
  }
}
