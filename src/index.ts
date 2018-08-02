// import 'allocator/tl';

import { h } from './h';

// You can't use the declarations provided by TS somehow.
// Probably due to the fact that the any type can't be used.

declare namespace console {
	function log(message: string): void;
}

const html = h('div', { className: 'whatever' },
	h('span', {}),
);

console.log(JSON.stringify(html));
// asm(`console.log('body')`);
// console.log(document.querySelector('body'));
