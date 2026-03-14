export type ElementType = 'text' | 'shape' | 'icon';

export interface LogoElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  rotation: number;
  opacity: number;
  content?: string; // For text or icon name
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string;
  borderRadius?: number;
  animation?: AnimationType;
  animationDuration?: number;
  animationDirection?: 'normal' | 'reverse' | 'alternate';
}

export type AnimationType = 'none' | 'fade' | 'scale' | 'rotate' | 'bounce' | 'pulse';

export interface LogoTemplate {
  id: string;
  name: string;
  elements: LogoElement[];
}
