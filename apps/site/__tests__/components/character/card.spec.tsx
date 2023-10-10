import { render, screen } from '../../utils';
import sampleCharacter from '../../../__mocks__/character.json';

import { describe, it, expect } from 'vitest';

import { CharacterCard } from '@/components/character/card';

describe('Character card component test battery', () => {
  it('should render the card with character name', () => {
    render(<CharacterCard {...sampleCharacter} />);
    expect(screen.getByText(sampleCharacter.name)).toBeInTheDocument();
  });
});
