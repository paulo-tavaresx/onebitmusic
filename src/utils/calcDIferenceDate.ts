const umSegundo = 1000 // Número de milissegundos em um segundo
const umMinuto = 60 * umSegundo // Número de milissegundos em um minuto
const umaHora = 60 * umMinuto // Número de milissegundos em uma hora
const umDia = 24 * umaHora // Número de milissegundos em um dia

export function calcDIferenceDate(EventEndData: Date) {
  const currentDate = new Date()
  const dataFim = new Date(EventEndData)

  let diference = dataFim.getTime() - currentDate.getTime()

  if (diference <= 0) {
    return null
  }

  const dias = Math.floor(diference / umDia)
  const horas = Math.floor((diference % umDia) / umaHora)
  const minutos = Math.floor((diference % umaHora) / umMinuto)
  const segundos = Math.floor((diference % umMinuto) / umSegundo)

  return {
    dias: dias,
    horas: horas,
    minutos: minutos,
    segundos: segundos
  }
}
