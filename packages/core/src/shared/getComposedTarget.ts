/**
 * Returns the un-retargeted target of an event. A listener above a shadow root sees
 * `event.target` as the shadow host. `composedPath()` is empty once dispatch ends,
 * so call this synchronously.
 */
export function getComposedTarget(event: Event): EventTarget | null {
  return event.composedPath()[0] ?? event.target
}
