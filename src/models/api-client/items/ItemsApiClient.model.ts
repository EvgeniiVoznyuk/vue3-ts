import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client'
import { ItemsApiClientUrlsInterface } from './ItemsApiClientUrls.interface';
import { ItemsApiClientInterface } from './ItemsApiClient.interface';
import { itemInterface } from '@/models/items/item.interface';

export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly urls!: ItemsApiClientUrlsInterface

  constructor(urls: ItemsApiClientUrlsInterface) {
    this.urls = urls
  }

  fetchItems(): Promise<itemInterface[]> {
    const getParameters: HttpRequestParamsInterface = {
      url: this.urls.fetchItems,
      requiresToken: false,
    }

    return HttpClient.get<itemInterface[]>(getParameters)
  }
}