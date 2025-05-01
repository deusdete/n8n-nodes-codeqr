import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class CodeQRApi implements ICredentialType {
	name = 'codeqrApi';

	displayName = 'CodeQR API';

	documentationUrl = 'https://codeqr.io/help';

	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
}
