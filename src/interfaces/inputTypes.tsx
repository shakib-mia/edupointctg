export interface inputTypes {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  className?: string;
  name: string;
  required?: boolean;
  value?: string;
  onChange?: () => void;
}
