import type {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	ILoadOptionsFunctions,
	IRequestOptions,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

export async function codeqrApiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	resource: string,
	body: any = {},
	qs: IDataObject = {},
	uri?: string,
	option: IDataObject = {},
): Promise<any> {
	const authenticationMethod = this.getNodeParameter('authentication', 0) as string;
	let options: IRequestOptions = {
		headers: {},
		method,
		qs,
		body,
		uri: uri || `https://api.codeqr.io${resource}`,
		json: true,
	};
	options = Object.assign({}, options, option);
	if (Object.keys(options.body as IDataObject).length === 0) {
		delete options.body;
	}

	try {
		if (authenticationMethod === 'accessToken') {
			const credentials = await this.getCredentials('codeqrApi');
			options.headers = { Authorization: `Bearer ${credentials.accessToken}` };

			return await this.helpers.request(options);
		} else {
			return await this.helpers.requestOAuth2.call(this, 'codeqrOAuth2Api', options, {
				tokenType: 'Bearer',
			});
		}
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}
