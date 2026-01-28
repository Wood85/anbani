export type ProjectCategory =
  | 'projects'
  | 'kitchens'
  | 'wardrobes'
  | 'bedrooms'
  | 'living-rooms'
  | 'children-rooms'
  | 'bathrooms'
  | 'workspaces'
  | 'b2b'
  | 'hallways';

export interface Project {
  id: number;
  src: string;
  category: ProjectCategory;
  address?: string;
  description?: string;
}

export interface ApartmentProject {
  id: number;
  src: string[];
  title: string;
  description: string;
}

export const ALL_CATEGORY = 'all' as const;

export type CategoryFilter = ProjectCategory | typeof ALL_CATEGORY;

export interface CategoryOption {
  value: string;
  label: string;
  // count: number;
}
