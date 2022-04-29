const data = require('./build/data.json')

const names = Object.keys(data).map(k => data[k].name) as const;

export type IconName = typeof names[number];