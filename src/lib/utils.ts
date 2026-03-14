import { type ClassValue, clsx } from 'clsx'
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

export function formatFileSize(bytes: number) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / 1024 / 1024).toFixed(1) + ' MB'
}
