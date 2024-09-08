
const meg = { 0: { key: 1 } };
const mes = {
  0: { key: 1, decisions: [{ key: 1, if: 'under', result: 'under' }] },
  under: { zone: 'deep_qtr' },
};
const mod = {
  0: { key: 1, decisions: [{ key: 1, if: 'under', result: 'under' }, { key: 1, if: 'hitch', result: 'smash' }] },
  under: { zone: 'deep_qtr' },
  smash: { zone: 'deep_qtr' },
};
const palms = {
  0: { key: 1, decisions: [{ key: 2, if: 'quick_out', result: 'out'}, { key: 1, if: 'under', result: 'under' }, { key: 1, if: 'hitch', result: 'smash' }]},
  out: { key: 2 },
  under: { zone: 'deep_qtr' },
  smash: { zone: 'deep_qtr' }, 
};

const wall2DecisionMap = {
  push: { key: 3, if: 'out', result: 'push' },
  under: { key: 1, if: 'under' , result: 'under' },
  smash: { key: 1, if: 'hitch', result: 'smash'},
  out: { key: 2, if: 'quick_out', result: 'out'},
};
const wall2ResultMap = {
  push: { key: 3 },
  under: { key: 1 },
  smash: { key: 1 },
  out: { zone: 'flat'},
};
const wall2Base = { key: 2, until: 'vertical', zone: 'flat' };
const getWall2 = (calls) => {
  const wall2 = {
    0: { ...wall2Base, decisions: calls.map(call => wall2DecisionMap[call])},
  };

  calls.forEach(call => wall2[call] = wall2ResultMap[call]);

  return wall2;
};

const hammer = {
  0: { key: 3, decisions: [{ key: 3, if: 'out', result: 'push'}] },
  push: wall2Base,
};

const robber = {
  0: { key: 2, once: 'vertical', decisions: [{ key: 2, unless: 'vertical', result: 'rob_1' }] },
  rob_1: { key: 1 }
};

export const coverages = {
  meg: {
    key: 'meg',
    value: 'meg',
    label: 'MEG',
    alignment: {
      c: { key: 1, alignment: 'press' },
      a: { key: 2, alignment: 'press' },
      h: { key: 3, alignment: 'press' },
      s: { key: 'hash', alignment: 'deep'},
    },
    responsibilities: {
      c: meg,
      a: getWall2(['push']),
      h: hammer,
      s: robber,
    }
  },
  mes: {
    key: 'mes',
    value: 'mes',
    label: 'MES',
    alignment: {
      c: { key: 1, alignment: 'press' },
      a: { key: 2, alignment: 'press' },
      h: { key: 3, alignment: 'press' },
      s: { key: 'hash', alignment: 'deep'},
    },
    responsibilities: {
      c: mes,
      a: getWall2(['under', 'push']), /* [{ key: 1, if: 'under' }, { key: 3, if: 'out' }, { key: 2, until: 'vertical', zone: 'flat' }], */
      h: hammer,
      s: robber,
    }
  },
  quarters: {
    key: 'quarters',
    value: 'quarters',
    label: 'Quarters',
    alignment: {
      c: { key: 1, alignment: 'press' },
      a: { key: 2, alignment: 'press' },
      h: { key: 3, alignment: 'press' },
      s: { key: 'hash', alignment: 'deep'},
    },
    responsibilities: {
      c: mod, /* [{ key: 1, unless: ['under', 'hitch'] }, { zone: 'deep_qtr' }], */
      a: getWall2(['under', 'smash', 'push']), /* [{ key: 1, if: ['under', 'hitch'] }, { key: 3, if: 'out' }, { key: 2, until: 'vertical', zone: 'flat' }], */
      // Seriously they're not the same coverage by coverage, Wall 2 is just the default
      h: hammer,
      s: robber,
    }
  },
  two_read: {
    key: 'two_read',
    value: 'two_read',
    label: '2-Read',
    alignment: {
      c: { key: 1, alignment: 'press' },
      a: { key: 2, alignment: 'press' },
      h: { key: 3, alignment: 'press' },
      s: { key: 'hash', alignment: 'deep'},
    },
    responsibilities: {
      c: palms,
      a: getWall2(['out', 'under', 'smash', 'push']),
      h: hammer,
      s: robber, /* [{ key: 2, once: 'vertical'}, { key: 1 }], */ // TODO robber_read
    }
  },
  bracket: {
    key: 'bracket',
    value: 'bracket',
    label: 'Bracket',
    alignment: {
      c: { key: 1, alignment: 'press' },
      a: { key: 2, alignment: 'press' },
      h: { key: 3, alignment: 'press' },
      s: { key: 'hash', alignment: 'deep' },
    },
    responsibilities: {
      c: meg,
      a: {
        0: { key: 2, lev: 'under', decisions: [{ key: 3, if: 'out', result: 'push' }]},
        push: { key: 3 },
      },
      s: robber,
      h: {
        0: { key: 3, decisions: [{ key: 3, if: 'out', result: 'push'}]},
        push: { key: 2, lev: 'under'},
      },
    }
  },
  // TODO: switch: { ... },
  bronco: {
    key: 'bronco',
    value: 'bronco',
    label: 'Bronco',
    alignment: {
      c: { key: 1, alignment: 'press' },
      a: { key: 2, alignment: 'press' },
      h: { key: 3, alignment: 'press' },
      s: { key: 'hash', alignment: 'deep' },
    },
    responsibilities: {
      c: meg,
      a: {
        0: { key: 2 , decisions: [{ key: [2, 3], if: ['under', 'out'], result: 'push' }, { key: 2, if: 'out', result: 'unknown'}, { key: 2, if: 'vertical', result: 'unknown'}]},
        unknown: { stay: true }, // TODO: where are we finding work?
        push: { key: 2 },
      },
      s: {
        0: { key: 2, decisions: [{ key: [2, 3], if: ['under', 'out'], result: 'push' }, { key: 2, if: 'in', result: 'in'}]},
        in: { key: 1 },
        push: { key: 3 },
      },
      h: {
        0: { key: 3, decisions: [{ key: [2, 3], if: ['under', 'out'], result: 'push' }]},
        push: { zone: 'hook' },
      }
    },
  },
  cover_two: {
    key: 'cover_two',
    value: 'cover_two',
    label: 'Cover 2',
    alignment: {
      c: { key: 1, alignment: 'press' },
      a: { key: 2, alignment: 'press' },
      h: { key: 3, alignment: 'press' },
      s: { key: 'hash', alignment: 'deep' },
    },
    responsibilities: {
      c: {
        0: { zone: 'flat', else: 'cut' },
        cut: { key: 1, lev: 'under' },
      },
      a: {
        0: { key: 2, decisions: [{ key: [2, 3], if: ['quick_out', null], unless: [null, 'quick_out'], result: 'rob_1' }] },
        rob_1: { key: 1, lev: 'under' },
      },
      s: {
        0: { key: 1, decisions: [{ key: 1, unless: 'vertical', result: 'bracket_2' }]},
        bracket_2: { key: 2, lev: 'over' },
      },
      h: hammer,
    },
  },
};

coverages.mix = {
  ...coverages.quarters,
  key: 'mix',
  value: 'mix',
  label: 'Mix',
}; // Only difference is RPO fit