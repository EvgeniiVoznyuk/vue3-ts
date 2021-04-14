import { itemInterface } from '@/models/items/item.interface';

export interface ItemsApiClientInterface {
  fetchItems: () => Promise<itemInterface[]>
}