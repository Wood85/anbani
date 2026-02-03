export type ProjectCategory =
  | 'projects'
  | 'kitchens'
  | 'hallways'
  | 'bedrooms'
  | 'children-rooms'
  | 'wardrobes'
  | 'dressing-rooms'
  | 'bathrooms'
  | 'workspaces'
  | 'b2b';

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
  option: string;
}

export type CategoryFilter = ProjectCategory;

export interface CategoryOption {
  value: string;
  label: string;
}
