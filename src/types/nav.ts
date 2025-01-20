import type { Icons } from '@/components/icons';

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface SidebarNavItem extends NavItem {
  icon?: keyof typeof Icons;
}
