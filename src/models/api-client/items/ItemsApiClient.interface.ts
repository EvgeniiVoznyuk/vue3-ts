import { ItemInterface } from '@/models/items/item.interface'

/**
* @Name ItemsApiClientInterface
* @description
* Интерфейс для клиентского API-модуля Items
*/
export interface ItemsApiClientInterface {
  fetchItems: () => Promise<ItemInterface[]>
}
