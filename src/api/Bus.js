import { request } from './Client';

export function getBuses() {
  return request('get', 'bus');
}
