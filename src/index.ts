import 'allocator/arena';

// You can't use the declarations provided by TS somehow.
// Probably due to the fact that the any type can't be used.
declare namespace console {
	function log(message: any): void;
}

declare namespace document {
	function querySelector(selectors: string): HTMLElement;
}

console.log(document.querySelector('body'));
