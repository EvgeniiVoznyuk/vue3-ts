import { ApiClientInterface } from '@/models/api-client/ApiClientInterface'
import itemsApiClient from './items'

const apiMockClient: ApiClientInterface = {
  items: itemsApiClient
}

export default apiMockClient