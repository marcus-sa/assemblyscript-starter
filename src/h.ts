export type VNodeChild = VNode | string | number;

export interface VNode {
	nodeName: string;
	attributes: VNodeAttributes;
	children: VNodeChild[];
	key?: string;
}

export interface VNodeAttributes {
	className?: string;
	onClick?: Function;
	key?: string;
}

export function h(nodeName: string | Function, attributes: VNodeAttributes = {}, ...children: VNodeChild[]): VNode {
	/*const children: VNode[] = [];
	let length = arguments.length;

	while (rest.length) {
		children.push(rest.pop());
	}*/

	/*while (rest.length) {
		const node = rest.pop();

		if (node && (node as VNode[]).pop) {
			for (length = node.length; length--; ) {
				rest.push(node[length]);
			}
		} else if (node != null && node !== true && node !== false) {
			children.push(node);
		}
	}*/

	return typeof nodeName === 'function'
		? nodeName(attributes, ...children)
		: {
			key: attributes.key,
			nodeName,
			attributes,
			children,
		};
}
