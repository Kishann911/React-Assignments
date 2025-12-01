import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';

describe('UserCard Component', () => {
  test('renders UserCard with provided props', () => {
    render(<UserCard name="Alice Johnson" age={28} />);
    
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.getByText('Age: 28')).toBeInTheDocument();
  });

  test('renders UserCard with default props', () => {
    render(<UserCard />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Age: 25')).toBeInTheDocument();
  });

  test('renders multiple UserCards with different props', () => {
    render(
      <>
        <UserCard name="Bob Smith" age={35} />
        <UserCard name="Carol White" age={42} />
      </>
    );
    
    expect(screen.getByText('Bob Smith')).toBeInTheDocument();
    expect(screen.getByText('Age: 35')).toBeInTheDocument();
    expect(screen.getByText('Carol White')).toBeInTheDocument();
    expect(screen.getByText('Age: 42')).toBeInTheDocument();
  });
});
