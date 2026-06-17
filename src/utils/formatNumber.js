export function formatNumber(value) {
    return new Intl.NumberFormat("nl-NL", {
        maximumFractionDigits: 2,
    }).format(value);
}
