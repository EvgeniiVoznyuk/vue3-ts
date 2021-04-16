import { ItemInterface } from '../items/item.interface';
/**
 * @name ItemsStateInterface
 * @description
 * interface for items state
 */

export interface ItemsStateInterface {
  loading: boolean,
  items: ItemInterface[],
}
