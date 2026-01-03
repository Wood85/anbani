import { supabase } from '@/shared/lib/supabase/client';
import type { Review } from './types';

export const getReviews = async (): Promise<Review[]> => {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const createReview = async (name: string, text: string) => {
  const { data, error } = await supabase.from('reviews').insert({ name, text }).select().single();

  if (error) throw error;
  return data;
};
