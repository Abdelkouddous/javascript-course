//shared across amazon and checkout js

export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}
