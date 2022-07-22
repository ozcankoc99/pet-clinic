import { MenuItem } from '../model/menu-item';

export class MenuUtils {
  static findMenuItemByLink(
    node: Partial<MenuItem> | undefined,
    lambda: (x: Partial<MenuItem>) => boolean
  ): Partial<MenuItem> | undefined {
    if (node) {
      if (lambda.apply(node, [node])) {
        return node;
      }
      const childResults = node?.children?.map((x) =>
        MenuUtils.findMenuItemByLink(x, lambda)
      );

      return childResults?.filter((x) => x !== undefined)[0];
    }
    return undefined;
  }

  static findParents(node: Partial<MenuItem> | undefined): Partial<MenuItem>[] {
    if (node) {
      const parents = MenuUtils.findParents(node.parent);
      parents.push(node);
      return parents;
    }
    return [];
  }
  static findMenuItemAndParentsByLink(
    url: string,
    node: Partial<MenuItem> | undefined
  ): Partial<MenuItem>[] {
    const found = MenuUtils.findMenuItemByLink(node, (x) => x?.link === url);
    const parents = MenuUtils.findParents(found?.parent);
    if (found) {
      parents.push(found);
    }
    return parents;
  }

  public static processTreeNode(
    node: Partial<MenuItem> | undefined,
    depth: number,
    parent: Partial<MenuItem> | undefined
  ) {
    if (node) {
      node.depth = depth;
      node.parent = parent;
      node.badgeClass = node.badgeClass ?? 'badge-info';
      node.children?.forEach((x) => this.processTreeNode(x, depth + 1, node));
    }
    return node;
  }
}
