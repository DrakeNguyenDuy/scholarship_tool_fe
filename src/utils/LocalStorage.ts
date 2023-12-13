import { KeyLocalStorage } from '../constants/KeyLocalService'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ItemLSType = {
  key: keyof typeof KeyLocalStorage
  value: string
}

export const eventTarget = new EventTarget()

export const WorkingWithLS = {
  saveToLS: (input: ItemLSType[]) => {
    input.forEach((item) => localStorage.setItem(item.key, item.value))
  },
  getFromLs: (key: keyof typeof KeyLocalStorage) => {
    return localStorage.getItem(key) as string
  },
  clearFromLS: (input: (keyof typeof KeyLocalStorage)[]) => {
    input.forEach((key) => localStorage.removeItem(key))
    eventTarget.dispatchEvent(new Event('resetUser'))
  }
}
