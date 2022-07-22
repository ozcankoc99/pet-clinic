export interface MenuItem {
  sortOrder: number;
  text: string;
  tooltip: string;
  link: string;
  icon: string;
  badge: string;
  badgeClass: string;
  isActive: boolean;
  isExpanded: boolean;
  children: Partial<MenuItem>[];
  parent: Partial<MenuItem> | undefined;
  depth: number;
}
