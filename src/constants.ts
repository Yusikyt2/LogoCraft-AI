import { LogoElement, AnimationType } from './types';

export const TEMPLATES = [
  {
    id: 'tech-minimal',
    name: 'Tech Minimal',
    elements: [
      {
        id: '1',
        type: 'shape',
        x: 150,
        y: 100,
        width: 100,
        height: 100,
        fill: '#3b82f6',
        stroke: 'transparent',
        strokeWidth: 0,
        rotation: 45,
        opacity: 1,
        borderRadius: 12,
        animation: 'pulse'
      },
      {
        id: '2',
        type: 'text',
        x: 120,
        y: 220,
        width: 160,
        height: 40,
        fill: '#ffffff',
        stroke: 'transparent',
        strokeWidth: 0,
        rotation: 0,
        opacity: 1,
        content: 'TECHNO',
        fontSize: 32,
        fontFamily: 'Inter',
        fontWeight: '800'
      }
    ]
  },
  {
    id: 'eco-leaf',
    name: 'Eco Leaf',
    elements: [
      {
        id: '3',
        type: 'icon',
        x: 160,
        y: 100,
        width: 80,
        height: 80,
        fill: '#10b981',
        stroke: 'transparent',
        strokeWidth: 0,
        rotation: 0,
        opacity: 1,
        content: 'Leaf',
        animation: 'bounce'
      },
      {
        id: '4',
        type: 'text',
        x: 130,
        y: 200,
        width: 140,
        height: 40,
        fill: '#064e3b',
        stroke: 'transparent',
        strokeWidth: 0,
        rotation: 0,
        opacity: 1,
        content: 'NATURA',
        fontSize: 28,
        fontFamily: 'Inter',
        fontWeight: '600'
      }
    ]
  }
];

export const getAnimationConfig = (type: AnimationType, duration: number = 2, direction: any = 'normal') => {
  const baseTransition = { 
    duration, 
    repeat: Infinity, 
    repeatType: direction === 'alternate' ? "reverse" : "loop",
    ease: "easeInOut"
  };

  switch (type) {
    case 'fade':
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: baseTransition
      };
    case 'scale':
      return {
        initial: { scale: 0.8 },
        animate: { scale: 1.1 },
        transition: baseTransition
      };
    case 'rotate':
      return {
        animate: { rotate: direction === 'reverse' ? -360 : 360 },
        transition: { ...baseTransition, ease: "linear" }
      };
    case 'bounce':
      return {
        animate: { y: [0, -20, 0] },
        transition: baseTransition
      };
    case 'pulse':
      return {
        animate: { scale: [1, 1.05, 1], opacity: [1, 0.8, 1] },
        transition: baseTransition
      };
    default:
      return {};
  }
};
