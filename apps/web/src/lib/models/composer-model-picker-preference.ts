import { createStoredPreference } from "../preferences/stored-preference";

export const COMPOSER_MODEL_PICKER_STORAGE_KEY = "rakazo.composerModelPicker";

/** The model picker shows in the message box by default; only a saved "off" hides it. */
export function normalizeComposerModelPicker(raw: string | null | undefined): boolean {
  if (raw == null) return true;
  return raw.trim().toLowerCase() !== "off";
}

export const composerModelPickerPreference = createStoredPreference({
  key: COMPOSER_MODEL_PICKER_STORAGE_KEY,
  parse: normalizeComposerModelPicker,
  serialize: (enabled) => (enabled ? "on" : "off"),
});
