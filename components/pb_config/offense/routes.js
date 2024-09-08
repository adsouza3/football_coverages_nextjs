export const routes = {
  flat: {
    key: 'flat',
    value: 'flat',
    label: 'Flat',
    n: '1',
    steps: [
      { y: 3 }, { x: 2 }
    ]
  },
  slant: {
    key: 'slant',
    value: 'slant',
    label: 'Slant',
    n: '2',
    steps: [
      { y: 3 }, { x: -3, y: 2 }
    ]
  },
  hitch: {
    key: 'hitch',
    value: 'hitch',
    label: 'Hitch',
    n: '0',
    steps: [
      { y: 3 }, { x: -3, y: -2 }
    ]
  },
  comeback: {
    key: 'comeback',
    value: 'comeback',
    label: 'Comeback',
    n: '3',
    steps: [
      { y: 10 }, { x: 2, y: -2 }
    ]
  },
  curl: {
    key: 'curl',
    value: 'curl',
    label: 'Curl',
    n: '4',
    steps: [
      { y: 10 }, { x: 2, y: -2 }
    ]
  },
  out: {
    key: 'out',
    value: 'out',
    label: 'Out',
    n: '5',
    steps: [
      { y: 10 }, { x: 5 }
    ]
  },
  in: {
    key: 'in',
    value: 'in',
    label: 'In',
    other: 'dig',
    n: '6',
    steps: [
      { y: 10 }, { x: -5 }
    ]
  },
  corner: {
    key: 'corner',
    value: 'corner',
    label: 'Corner',
    n: '7',
    steps: [
      { y: 10 }, { x: 5, y: 5 }
    ]
  },
  post: {
    key: 'post',
    value: 'post',
    label: 'Post',
    n: '8',
    steps: [
      { y: 10 }, { x: -5, y: 5 }
    ]
  },
  go: {
    key: 'go',
    value: 'go',
    label: 'Go',
    n: '9',
    steps: [
      { y: 10 }, { y: 5 }
    ]
  },
};

export const categories = {
  in: [routes.in, routes.slant],
  out: [routes.flat, routes.out],
  under: [routes.comeback, routes.curl],
  vertical: [routes.post, routes.corner, routes.go],
  hitch: [routes.hitch],
  quick_out: [routes.flat],
  flat: [routes.flat],
};