import { INodeProperties } from 'n8n-workflow';

export const qrcodeFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                 qrcode:get                                   */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'QR Code ID',
		name: 'qrcodeId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the QR Code to retrieve',
		displayOptions: {
			show: {
				resource: ['qrcode'],
				operation: ['get'],
			},
		},
	},
	/* -------------------------------------------------------------------------- */
	/*                                 qrcode:create                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'QR Code Type',
		name: 'type',
		type: 'options',
		options: [
			{ name: 'Crypto', value: 'crypto' },
			{ name: 'E-Mail', value: 'email' },
			{ name: 'FaceTime', value: 'facetime' },
			{ name: 'Geo', value: 'geo' },
			{ name: 'Phone', value: 'phone' },
			{ name: 'PIX', value: 'pix' },
			{ name: 'SMS', value: 'sms' },
			{ name: 'Text', value: 'text' },
			{ name: 'URL', value: 'url' },
			{ name: 'vCard', value: 'vcard' },
			{ name: 'Wi-Fi', value: 'wifi' },
		],
		default: 'url',
		required: true,
		description: 'The type of QR Code to generate',
		displayOptions: {
			show: {
				resource: ['qrcode'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Static/Dynamic',
		name: 'static',
		type: 'boolean',
		default: true,
		description: 'Whether the QR Code is static (fixed content) or dynamic (editable content)',
		displayOptions: {
			show: {
				resource: ['qrcode'],
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
				resource: ['qrcode'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Background Color',
				name: 'bgColor',
				type: 'color',
				default: '',
				description: 'Background color of the QR Code',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description associated with the QR Code',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'json',
				default: '',
				description: 'Email data for email-based QR Codes',
			},
			{
				displayName: 'Expiration Date',
				name: 'expiresAt',
				type: 'dateTime',
				default: '',
				description: 'Expiration date of the QR Code',
			},
			{
				displayName: 'Foreground Color',
				name: 'fgColor',
				type: 'color',
				default: '',
				description: 'Foreground color of the QR Code',
			},
			{
				displayName: 'Image URL',
				name: 'image',
				type: 'string',
				default: '',
				description: 'URL of an image associated with the QR Code',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number stored in the QR Code',
			},
			{
				displayName: 'Public Stats',
				name: 'publicStats',
				type: 'boolean',
				default: false,
				description: 'Whether the QR Code statistics are publicly accessible',
			},
			{
				displayName: 'Show Logo',
				name: 'showLogo',
				type: 'boolean',
				default: false,
				description: 'Whether to display a logo in the QR Code',
			},
			{
				displayName: 'Size',
				name: 'size',
				type: 'number',
				default: 300,
				description: 'Size of the QR Code in pixels',
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				description: 'Text content stored in the QR Code',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Title associated with the QR Code',
			},
			{
				displayName: 'Track Conversion',
				name: 'trackConversion',
				type: 'boolean',
				default: false,
				description: 'Whether to enable tracking of conversions for the QR Code',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'The destination URL of the QR Code',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                 qrcode:update                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'QR Code ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the QR Code to update',
		displayOptions: {
			show: {
				resource: ['qrcode'],
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
				displayName: 'Background Color',
				name: 'bgColor',
				type: 'color',
				default: '',
				description: 'Background color of the QR Code',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description associated with the QR Code',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'json',
				default: '',
				description: 'Email data for email-based QR Codes',
			},
			{
				displayName: 'Expiration Date',
				name: 'expiresAt',
				type: 'dateTime',
				default: '',
				description: 'Expiration date of the QR Code',
			},
			{
				displayName: 'Foreground Color',
				name: 'fgColor',
				type: 'color',
				default: '',
				description: 'Foreground color of the QR Code',
			},
			{
				displayName: 'Image URL',
				name: 'image',
				type: 'string',
				default: '',
				description: 'URL of an image associated with the QR Code',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number stored in the QR Code',
			},
			{
				displayName: 'Public Stats',
				name: 'publicStats',
				type: 'boolean',
				default: false,
				description: 'Whether the QR Code statistics are publicly accessible',
			},
			{
				displayName: 'Show Logo',
				name: 'showLogo',
				type: 'boolean',
				default: false,
				description: 'Whether to display a logo in the QR Code',
			},
			{
				displayName: 'Size',
				name: 'size',
				type: 'number',
				default: 300,
				description: 'Size of the QR Code in pixels',
			},
			{
				displayName: 'Static/Dynamic',
				name: 'static',
				type: 'boolean',
				default: true,
				description: 'Whether the QR Code is static (fixed content) or dynamic (editable content)',
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				description: 'Text content stored in the QR Code',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Title associated with the QR Code',
			},
			{
				displayName: 'Track Conversion',
				name: 'trackConversion',
				type: 'boolean',
				default: false,
				description: 'Whether to enable tracking of conversions for the QR Code',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'The destination URL of the QR Code',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                 qrcode:delete                                */
	/* -------------------------------------------------------------------------- */

	{
		displayName: 'QR Code ID',
		name: 'qrcodeId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the QR Code to delete',
		displayOptions: {
			show: {
				resource: ['qrcode'],
				operation: ['delete'],
			},
		},
	},
];
