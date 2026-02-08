export type ProjectCategory =
  | 'projects'
  | 'kitchens'
  | 'hallways'
  | 'bedrooms'
  | 'children-rooms'
  | 'wardrobes'
  | 'bathrooms'
  | 'b2b'
  | 'others';

export interface ProjectItem {
  id: number;
  src: string[];
  title: string;
  description: string;
  option: string;
}

export interface ProjectCategoryData {
  category: ProjectCategory;
  items: ProjectItem[];
}

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
