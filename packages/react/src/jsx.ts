import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	ElementType,
	Type,
	Key,
	Ref,
	Props,
	ReactElementType,
} from 'shared/ReactType';

const ReactElement = (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props,
): ReactElementType => {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		props,
		key,
		ref,
		__mark: 'big-react',
	};

	return element;
};

export const jsx = (type: ElementType, config: any, ...maybeChildrens) => {
	let key: Key = null;
	let ref: Ref = null;
	const props: Props = {};

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			key = val;
		} else if (prop === 'ref') {
			ref = val;
		} else if (Object.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	const childrenLength = maybeChildrens.length;
	if (childrenLength) {
		if (childrenLength === 1) {
			props.children = maybeChildrens[0];
		} else {
			props.children = maybeChildrens;
		}
	}

	return ReactElement(type, key, ref, props);
};

export const jsxDEV = (type: ElementType, config: any) => {
	let key: Key = null;
	let ref: Ref = null;
	const props: Props = {};

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			key = val;
		} else if (prop === 'ref') {
			ref = val;
		} else if (Object.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	return ReactElement(type, key, ref, props);
};
