import { render, screen } from '../utils';
import { describe, it, expect } from 'vitest';

import Homepage from '@/app/page';

describe('Homepage test battery', () => {
  it('should render the homepage', () => {
    render(<Homepage />);
    expect(screen.getByText('Characters')).toBeInTheDocument();
  });
});
