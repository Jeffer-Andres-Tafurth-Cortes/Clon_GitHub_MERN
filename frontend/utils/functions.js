// La funcion 'formetMemberSince' sera la que formateara la feche de cada usuario para poderla mostrar
export function formatMemberSince(inputDateString){
  const options = { month: 'short', day: '2-digit', year: 'numeric'}
  const formattedDate = new Date(inputDateString).toLocaleDateString('es', options)
  return formattedDate
}

// 
export function formatDate(inputDateString){

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ]

  const date = new Date(inputDateString)
  const monthName = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  const formattedDate = `${monthName} ${day}, ${year}`
  return formattedDate
}