const formatMoney = (value) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return formatter.format(value)
}

const calculateTotal = (quantity, deadline) => {
  let total

  const MONTHLY_INTEREST = {
    6: 1.1,
    12: 1.2,
    24: 1.3
  }

  if (quantity < 5000) {
    total = quantity * 1.5
  } else if (quantity >= 5000 && quantity < 10000) {
    total = quantity * 1.4
  } else if (quantity >= 10000 && quantity < 15000) {
    total = quantity * 1.3
  } else {
    total = quantity * 1.2
  }

  return total * MONTHLY_INTEREST[deadline]
}

export {
  formatMoney,
  calculateTotal
}