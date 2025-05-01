import type {
    IDataObject,
    IExecuteFunctions,
    IHookFunctions,
    IHttpRequestMethods,
    ILoadOptionsFunctions
} from 'n8n-workflow';
import { codeqrApiRequest } from './codeqrApiRequest';

/**
 * Make an API request to paginated flow endpoint
 * and return all results
 */
export async function codeqrApiRequestAllItems(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	propertyName: string,
	method: IHttpRequestMethods,
	resource: string,

	body: any = {},
	query: IDataObject = {},
): Promise<any> {
	const returnData: IDataObject[] = [];

	let responseData;
	let uri: string | undefined;
	query.size = 50;

	do {
		responseData = await codeqrApiRequest.call(this, method, resource, body, query, uri);
		returnData.push.apply(returnData, responseData[propertyName] as IDataObject[]);
		if (responseData.pagination?.next) {
			uri = responseData.pagination.next;
		}
	} while (responseData.pagination?.next !== undefined);
	return returnData;
}
