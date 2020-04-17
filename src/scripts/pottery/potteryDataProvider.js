let pottery = []

export const getPottery = () =>
  fetch('http://localhost:3000/pottery')
    .then((res) => res.json())
    .then((parsedPottery) => (pottery = parsedPottery))

export const usePottery = () => pottery.slice()
