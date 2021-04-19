import { ApiClientInterface } from '@/models/api-client/ApiClientInterface'
import itemsApiClient from './items'

const apiLiveClient: ApiClientInterface = {
  items: itemsApiClient
}

export default apiLiveClient