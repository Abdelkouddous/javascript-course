//shared across amazon and checkout js

export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}
