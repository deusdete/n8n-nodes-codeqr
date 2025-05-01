import { INodeProperties } from 'n8n-workflow';

export const linkFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                 link:get                                   */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Link ID',
		name: 'linkId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the short link to retrieve',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['get'],
			},
		},
	},
	/* -------------------------------------------------------------------------- */
	/*                                 link:create                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Long URL',
		name: 'url',
		type: 'string',
		default: '',
		required: true,
		description: 'The destination URL of the short link',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Allow Indexing',
				name: 'doIndex',
				type: 'boolean',
				default: false,
				description: 'Whether to enable indexing of the short link',
			},
			{
				displayName: 'Android URL',
				name: 'android',
				type: 'string',
				default: '',
				description: 'The Android destination URL for device-specific redirection',
			},
			{
				displayName: 'Comments',
				name: 'comments',
				type: 'string',
				default: '',
				description: 'Comments or notes about the short link',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'A description displayed on the short link page',
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				description:
					'The domain of the short link. If not provided, the default workspace domain will be used.',
			},
			{
				displayName: 'Expiration Date',
				name: 'expiresAt',
				type: 'dateTime',
				default: '',
				description: 'The date and time when the short link will expire',
			},
			{
				displayName: 'Expired Redirect URL',
				name: 'expiredUrl',
				type: 'string',
				default: '',
				description: 'The URL to redirect to when the short link has expired',
			},
			{
				displayName: 'External ID',
				name: 'externalId',
				type: 'string',
				default: '',
				description:
					'This is the ID of the link in your database. Must be prefixed with ext_ when passed.',
			},
			{
				displayName: 'Flexible Link',
				name: 'flexible',
				type: 'boolean',
				default: false,
				description: 'Whether this is a flexible link with dynamic destination setting',
			},
			{
				displayName: 'Geo-Targeting',
				name: 'geo',
				type: 'json',
				default: '',
				description: 'Mapping of country codes to destination URLs (JSON format)',
			},
			{
				displayName: 'Image URL',
				name: 'image',
				type: 'string',
				default: '',
				description: 'URL of the image displayed on the short link page',
			},
			{
				displayName: 'iOS URL',
				name: 'ios',
				type: 'string',
				default: '',
				description: 'The iOS destination URL for device-specific redirection',
			},
			{
				displayName: 'Key',
				name: 'key',
				type: 'string',
				default: 'codeqr.link',
				description:
					'The short link slug. If not provided, a random 7-character slug will be generated.',
			},
			{
				displayName: 'Password',
				name: 'password',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description: 'The password required to access the destination URL',
			},
			{
				displayName: 'Proxy',
				name: 'proxy',
				type: 'boolean',
				default: false,
				description: 'Whether to enable proxy settings',
			},
			{
				displayName: 'Public Stats',
				name: 'publicStats',
				type: 'boolean',
				default: false,
				description: "Whether the short link's stats are publicly accessible",
			},
			{
				displayName: 'Rewrite Link',
				name: 'rewrite',
				type: 'boolean',
				default: false,
				description: 'Whether to enable link rewriting',
			},
			{
				displayName: 'Tag IDs',
				name: 'tagIds',
				type: 'string',
				typeOptions: { multipleValues: true },
				default: [],
				description: 'Array of tag IDs to apply to the short link',
			},
			{
				displayName: 'Tag Names',
				name: 'tagNames',
				type: 'string',
				typeOptions: { multipleValues: true },
				default: [],
				description: 'Array of tag names to apply to the short link',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'The title displayed on the short link page',
			},
			{
				displayName: 'Video URL',
				name: 'video',
				type: 'string',
				default: '',
				description: 'URL of the video displayed on the short link page',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                 link:update                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Link ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the short link to update',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Allow Indexing',
				name: 'doIndex',
				type: 'boolean',
				default: false,
				description: 'Whether to enable indexing of the short link',
			},
			{
				displayName: 'Android URL',
				name: 'android',
				type: 'string',
				default: '',
				description: 'The Android destination URL for device-specific redirection',
			},
			{
				displayName: 'Comments',
				name: 'comments',
				type: 'string',
				default: '',
				description: 'Comments or notes about the short link',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'A description displayed on the short link page',
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				description:
					'The domain of the short link. If not provided, the default workspace domain will be used.',
			},
			{
				displayName: 'Expiration Date',
				name: 'expiresAt',
				type: 'dateTime',
				default: '',
				description: 'The date and time when the short link will expire',
			},
			{
				displayName: 'Expired Redirect URL',
				name: 'expiredUrl',
				type: 'string',
				default: '',
				description: 'The URL to redirect to when the short link has expired',
			},
			{
				displayName: 'External ID',
				name: 'externalId',
				type: 'string',
				default: '',
				description:
					'This is the ID of the link in your database. Must be prefixed with ext_ when passed.',
			},
			{
				displayName: 'Flexible Link',
				name: 'flexible',
				type: 'boolean',
				default: false,
				description: 'Whether this is a flexible link with dynamic destination setting',
			},
			{
				displayName: 'Geo-Targeting',
				name: 'geo',
				type: 'json',
				default: '',
				description: 'Mapping of country codes to destination URLs (JSON format)',
			},
			{
				displayName: 'Image URL',
				name: 'image',
				type: 'string',
				default: '',
				description: 'URL of the image displayed on the short link page',
			},
			{
				displayName: 'iOS URL',
				name: 'ios',
				type: 'string',
				default: '',
				description: 'The iOS destination URL for device-specific redirection',
			},
			{
				displayName: 'Long URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'The destination URL of the short link',
			},
			{
				displayName: 'Password',
				name: 'password',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description: 'The password required to access the destination URL',
			},
			{
				displayName: 'Proxy',
				name: 'proxy',
				type: 'boolean',
				default: false,
				description: 'Whether to enable proxy settings',
			},
			{
				displayName: 'Public Stats',
				name: 'publicStats',
				type: 'boolean',
				default: false,
				description: "Whether the short link's stats are publicly accessible",
			},
			{
				displayName: 'Rewrite Link',
				name: 'rewrite',
				type: 'boolean',
				default: false,
				description: 'Whether to enable link rewriting',
			},
			{
				displayName: 'Tag IDs',
				name: 'tagIds',
				type: 'string',
				typeOptions: { multipleValues: true },
				default: [],
				description: 'Array of tag IDs to apply to the short link',
			},
			{
				displayName: 'Tag Names',
				name: 'tagNames',
				type: 'string',
				typeOptions: { multipleValues: true },
				default: [],
				description: 'Array of tag names to apply to the short link',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'The title displayed on the short link page',
			},
			{
				displayName: 'Video URL',
				name: 'video',
				type: 'string',
				default: '',
				description: 'URL of the video displayed on the short link page',
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                                 link:delete                                */
	/* -------------------------------------------------------------------------- */

	{
		displayName: 'Link ID',
		name: 'linkId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the short link to delete',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['delete'],
			},
		},
	},
];
