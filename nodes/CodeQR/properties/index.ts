import { INodeProperties } from 'n8n-workflow';
import { linkOperationsOptions } from './link.operations';
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

export const codeqrNodeProperties = [resourcesOptions, linkOperationsOptions];
