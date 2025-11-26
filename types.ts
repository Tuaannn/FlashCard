export interface Course {
  id: string;
  title: string;
  iconName: 'FileText' | 'Presentation' | 'Table' | 'Monitor' | 'Cpu' | 'ShieldCheck';
  theme: 'blue' | 'green' | 'orange' | 'purple' | 'cyan' | 'rose';
  description: string;
}

export enum AccessType {
  SINGLE = 'SINGLE',
  FULL = 'FULL'
}

export interface ValidationState {
  isValid: boolean;
  message: string;
  type: 'success' | 'error' | 'idle';
}