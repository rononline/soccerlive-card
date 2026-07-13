// Render a match score value safely. Providers normally send a scalar
// ("2"/2), but ESPN can send an object ({value, displayValue}) for in-progress
// matches; passing that straight into a template renders "[object Object]".
// Scalars pass through unchanged so existing "N/A"/"-" behaviour is preserved.
export function scoreText(v, fallback = '0') {
  if (v === null || v === undefined) return fallback;
  if (typeof v === 'object') {
    const inner = v.displayValue ?? v.value;
    return inner === null || inner === undefined ? fallback : String(inner);
  }
  return v;
}
