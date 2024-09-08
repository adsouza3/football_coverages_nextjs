 
 export const coverages = {
  meg: {
    key: 'meg',
    value: 'meg',
    label: 'MEG',
    alignment: {
      c: { key: 1, alignment: 'press' },
      a: { key: 2, alignment: 'press' },
      s: { key: 'hash', alignment: 'deep'},
    },
    responsibilities: {
      c: [{ key: 1 }],
      a: [{ key: 2, /* if: this side */ until: 'vertical', zone: 'middle'}],
      s: [{ key: 2, once: 'vertical'}, { key: 1 }],
    }
  },
 };