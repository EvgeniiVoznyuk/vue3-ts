import { itemInterface } from '@/models/items/item.interface';

export interface ItemsStateInterface {
  loading: boolean,
  items: itemInterface[],
}
