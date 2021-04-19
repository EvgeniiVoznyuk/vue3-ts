import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel
} from '@/models/api-client/items'

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: '/static/data/items.json'
}

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
// экспортирование только что созданного экземпляра
export default itemsApiClient