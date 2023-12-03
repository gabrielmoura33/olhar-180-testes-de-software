import { format, parse, parseISO } from 'date-fns'
import { date } from 'zod'

export function formatDate(dataString) {
  const data = parse(dataString, 'dd/MM/yyyy HH:mm', new Date())
  const formattedDate = format(data, 'yyyy-MM-dd HH:mm')
  return formattedDate
}

export function formatDateString(date) {
  const dateObject = parseISO(date)
  const formattedDate = format(dateObject, 'dd/MM/yyyy HH:mm')
  return formattedDate
}
