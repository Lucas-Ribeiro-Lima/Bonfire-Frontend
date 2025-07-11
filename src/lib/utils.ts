import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const DEFAULTDATA = new Date().toISOString().split('T')[0]

export const DEFAULTTIMEOUT = 1000 // ms

export function convertToBoolean(value: string | boolean) {
  if (value === '\u0001') {
    return true
  } else if (value === '\u0000') {
    return false
  }
  return Boolean(value)
}
