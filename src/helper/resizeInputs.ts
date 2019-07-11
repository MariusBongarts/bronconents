export function resizeInputs(e: HTMLInputElement) {
  if (e.value.length > 2) e.style.width = ((e.value.length) / 2 + 1) + 'em';
  if (e.value.length <= 2) e.style.width = '1.5em';
  if (e.value.length === 0) e.style.width = ((e.name.length) / 2 + 1) + 'em';
  if (e.value.length === 1) e.style.width = '1em';
}