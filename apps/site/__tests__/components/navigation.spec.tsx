import { fireEvent, render, screen } from '../utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { Navigation } from '@/components/navigation';

describe('Navigation component test battery', () => {
  beforeEach(() => {
    window.scrollTo = () => vi.fn();
  });

  it('should render the Starwars logos', () => {
    render(<Navigation />);
    expect(screen.getAllByAltText('Starwars Logo')).length(2);
  });

  it('should render the Navigation component', () => {
    render(<Navigation />);

    expect(screen.getByText('Characters')).toBeInTheDocument();
    expect(screen.getByText('Movies')).toBeInTheDocument();
    expect(screen.getByText('Planets')).toBeInTheDocument();
    expect(screen.getByText('Starships')).toBeInTheDocument();
  });

  it('should open and close the menu when the menu button is clicked', () => {
    window.innerWidth = 375;
    render(<Navigation />);

    expect(screen.getByTestId('menu-open-button')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('menu-open-button'));

    expect(screen.getByTestId('menu-close-button')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('menu-close-button'));

    expect(screen.getByTestId('menu-open-button')).toBeInTheDocument();
  });
});
