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
      site_config: {
        Row: {
          id: string
          key: string
          value: Json
          updated_at: string
        }
        Insert: {
          id?: string
          key: string
          value: Json
          updated_at?: string
        }
        Update: {
          id?: string
          key?: string
          value?: Json
          updated_at?: string
        }
      }
      services: {
        Row: {
          id: string
          title: string
          price: string
          duration: string
          image: string
          features: string[]
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          price: string
          duration: string
          image: string
          features: string[]
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          price?: string
          duration?: string
          image?: string
          features?: string[]
          order_index?: number
          updated_at?: string
        }
      }
      pricing_plans: {
        Row: {
          id: string
          title: string
          frequency: string
          discount: string
          description: string
          highlight: boolean
          badge: string | null
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          frequency: string
          discount: string
          description: string
          highlight?: boolean
          badge?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          frequency?: string
          discount?: string
          description?: string
          highlight?: boolean
          badge?: string | null
          order_index?: number
          updated_at?: string
        }
      }
      addons: {
        Row: {
          id: string
          title: string
          price: string
          description: string
          icon_name: string
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          price: string
          description: string
          icon_name: string
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          price?: string
          description?: string
          icon_name?: string
          order_index?: number
          updated_at?: string
        }
      }
      faqs: {
        Row: {
          id: string
          question: string
          answer: string
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          question: string
          answer: string
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          question?: string
          answer?: string
          order_index?: number
          updated_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          name: string
          location: string
          avatar: string
          text: string
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          location: string
          avatar: string
          text: string
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          location?: string
          avatar?: string
          text?: string
          order_index?: number
          updated_at?: string
        }
      }
      how_it_works: {
        Row: {
          id: string
          title: string
          description: string
          icon_name: string
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          icon_name: string
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          icon_name?: string
          order_index?: number
          updated_at?: string
        }
      }
      trust_points: {
        Row: {
          id: string
          title: string
          description: string
          icon_name: string
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          icon_name: string
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          icon_name?: string
          order_index?: number
          updated_at?: string
        }
      }
    }
  }
}
