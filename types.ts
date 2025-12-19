export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
}