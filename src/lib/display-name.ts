import type { Person, SmallPerson } from './app-types';

export function displayName(person: Person | SmallPerson) {
  return person.display_name || `${person.first_name} ${person.last_name}`;
}

// Placeholder headshot for people without an image
export const DEFAULT_IMAGE = 'images/people/default.svg';
