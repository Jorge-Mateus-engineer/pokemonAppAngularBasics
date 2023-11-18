import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          // left: 0,
          opacity: 0,
          transform: 'scale(0.2)',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        animate(
          '400ms',
          style({
            opacity: 1,
            transform: 'scale(1)',
          })
        ),
      ],
      { optional: true }
    ),
  ]),
]);
