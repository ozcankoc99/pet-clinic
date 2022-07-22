import { MenuItem } from '../model/menu-item';

export class MenuUtils {
  public static processTreeNode(
    node: Partial<MenuItem> | undefined,
    depth: number,
    parent: Partial<MenuItem> | undefined
  ) {
    if (node) {
      node.depth = depth;
      node.parent = parent;
      node.children?.map((x) => this.processTreeNode(x, depth + 1, node));
    }
  }
}
