import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel
} from '@/models/api-client/items';

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: '/stati/data/items.json'
}

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)

export default itemsApiClient