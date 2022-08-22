import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title', () => {
  test('문자열 "Project Noumemon"을 렌더링 한다', () => {
    render(<Title />);
    expect(screen.getByText('Project Noumenon')).toBeInTheDocument();
  });
});
