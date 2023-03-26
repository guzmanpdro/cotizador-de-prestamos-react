import { useState, useEffect } from "react"
import Header from "./components/Header"
import Button from "./components/Button"
import { formatMoney, calculateTotal } from "./utils"

function App() {
  const [amount, setAmount] = useState(10000)
  const [months, setMonths] = useState(6)
  const [total, setTotal] = useState(0)
  const [pay, setPay] = useState(0)

  useEffect(() => {
    const calculatedTotal = calculateTotal(amount, months)
    setTotal(calculatedTotal)
  }, [amount, months])

  useEffect(() => {
    // Calculate monthly pay
    setPay(total / months)
  }, [total])

  function handleChange(e) {
    setAmount(Number(e.target.value))
  }

  function handleDecrement() {
    const value = amount - STEP

    if (value < MIN) return alert('Cantidad no válida')

    setAmount(value)
  }

  function handleIncrement() {
    const value = amount + STEP

    if (value > MAX) return alert('Cantidad no válida')

    setAmount(value)
  }

  const MIN = 0
  const MAX = 20000
  const STEP = 100

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <Button
          operator='-'
          fn={handleDecrement}
        />
        <Button
          operator='+'
          fn={handleIncrement}
        />
      </div>


      <input
        className="w-full h-5 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        type="range"
        max={MAX}
        min={MIN}
        step={STEP}
        onChange={handleChange}
        value={amount}
      />

      <h3 className="my-5 text-center text-3xl font-extrabold text-indigo-600">{formatMoney(amount)}</h3>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">plazo </span>a pagar
      </h2>

      <select
        name=""
        id=""
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl text-gray-500"
        value={months}
        onChange={e => setMonths(e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de pagos</span>
        </h2>
        <p className="text-xl text-gray-500 text-center font-bold">{months} Meses</p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatMoney(total)} Total a pagar</p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatMoney(pay)} Pagos mensuales</p>
      </div>
    </div>
  )
}

export default App
