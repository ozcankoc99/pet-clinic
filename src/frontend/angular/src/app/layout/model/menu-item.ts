export interface MenuItem {
  sortOrder: number;
  text: string;
  tooltip: string;
  icon: string;
  badge: string;
  children: Partial<MenuItem>[];
  parent: Partial<MenuItem>;
}
