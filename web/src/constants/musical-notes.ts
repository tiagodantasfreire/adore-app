export interface MusicalNote {
  value: string
  label: string
  relative: string
}

export const MUSICAL_NOTES: MusicalNote[] = [
  { value: 'A', label: 'Lá', relative: 'F#m' },
  { value: 'B', label: 'Si', relative: 'G#m' },
  { value: 'C', label: 'Dó', relative: 'Am' },
  { value: 'D', label: 'Ré', relative: 'Bm' },
  { value: 'E', label: 'Mi', relative: 'C#m' },
  { value: 'F', label: 'Fá', relative: 'Dm' },
  { value: 'G', label: 'Sol', relative: 'Em' },
  { value: 'A#', label: 'Lá Sustenido', relative: 'Gm' },
  { value: 'C#', label: 'Dó Sustenido', relative: 'A#m' },
  { value: 'D#', label: 'Ré Sustenido', relative: 'Cm' },
  { value: 'F#', label: 'Fá Sustenido', relative: 'D#m' },
  { value: 'G#', label: 'Sol Sustenido', relative: 'Fm' },
]

export const getNoteByValue = (value: string) => {
  return MUSICAL_NOTES.find((note) => note.value === value)
}

export const getNoteByLabel = (label: string) => {
  return MUSICAL_NOTES.find((note) => note.label === label)
}
