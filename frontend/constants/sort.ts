export const SESSION_SORT_OPTIONS = [
  { key: 'recent_paired', label: 'Recently Paired' },
  { key: 'recent_listened', label: 'Recently Listened' },
  { key: 'title', label: 'Book Title (A-Z)' },
  { key: 'author', label: 'Author Name (A-Z)' },
] as const;

export const SAVED_SORT_OPTIONS = [
  { key: 'saved', label: 'Recently Saved' },
  { key: 'recent_paired', label: 'Recently Paired' },
  { key: 'recent_listened', label: 'Recently Listened' },
  { key: 'title', label: 'Book Title (A-Z)' },
  { key: 'author', label: 'Author Name (A-Z)' },
] as const;

export type SortKey =
  | (typeof SESSION_SORT_OPTIONS)[number]['key']
  | (typeof SAVED_SORT_OPTIONS)[number]['key'];