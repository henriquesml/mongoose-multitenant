import { tenantConnection } from './tenant-connection'
import {
  MongoMultitenantProps,
  MongoMultitenantResponse
} from './main.props'

export default function mongoMultitenant<T>({
  tenantId,
  modelName
}: MongoMultitenantProps): MongoMultitenantResponse<T> {
  const tenant = tenantConnection({ tenantId })
  return tenant.model<T>(modelName)
}

export { MongoMultitenantProps, MongoMultitenantResponse }
