import { INodeProperties } from 'n8n-workflow';
import { linkFields } from './link.fields';
import { linkOperationsOptions } from './link.operations';
import { qrcodeFields } from './qrcode.fields';
import { qrcodeOperationsOptions } from './qrcode.operations';
const resourcesOptions: INodeProperties = {
	displayName: 'Resource',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Link',
			value: 'link',
		},
		{
			name: 'QR Code',
			value: 'qrcode',
		},
	],
	default: 'link',
};

export const codeqrNodeProperties = [
	resourcesOptions,
	linkOperationsOptions,
	qrcodeOperationsOptions,
	...linkFields,
	...qrcodeFields,
];
