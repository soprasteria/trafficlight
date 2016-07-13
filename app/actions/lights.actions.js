// the light has changed
export const LIGHT_STATUS_CHANGED = 'LIGHT_STATUS_CHANGED'

export function lightStatusChanged(state) {
  return {
    type: LIGHT_STATUS_CHANGED,
    state
  }
}
