import { INodeProperties } from 'n8n-workflow';

export const linkOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['link'],
		},
	},
	options: [
		{
			name: 'Create',
			value: 'create',
			description: 'Create a link',
			action: 'Create a link',
		},
		{
			name: 'Get',
			value: 'get',
			description: 'Get a link',
			action: 'Get a link',
		},
		{
			name: 'Update',
			value: 'update',
			description: 'Update a link',
			action: 'Update a link',
		},
		{
			name: 'Delete',
			value: 'delete',
			description: 'Delete a link',
			action: 'Delete a link',
		},
	],
	default: 'create',
};
