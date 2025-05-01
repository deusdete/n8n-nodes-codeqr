import { INodeProperties } from 'n8n-workflow';

export const qrcodeOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['qrcode'],
		},
	},
	options: [
		{
			name: 'Create',
			value: 'create',
			description: 'Create a QR Code',
			action: 'Create a qr code',
		},
		{
			name: 'Get',
			value: 'get',
			description: 'Get a QR Code',
			action: 'Get a qr code',
		},
		{
			name: 'Update',
			value: 'update',
			description: 'Update a QR Code',
			action: 'Update a qr code',
		},
		{
			name: 'Delete',
			value: 'delete',
			description: 'Delete a QR Code',
			action: 'Delete a qr code',
		},
	],
	default: 'create',
};
