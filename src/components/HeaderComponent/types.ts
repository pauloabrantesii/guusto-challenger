export type HeaderComponentVariant = 'subtitle' | 'badge';

export interface HeaderComponentProps {
  title: string;
  subtitle: string;
  variant?: HeaderComponentVariant;
}

