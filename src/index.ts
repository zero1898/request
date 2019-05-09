import { RequestConfig } from './types'
import xhr from './xhr'

function request(config: RequestConfig): void {
  xhr(config)
}

export default request
