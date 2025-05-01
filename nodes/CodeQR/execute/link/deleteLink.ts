import { IExecuteFunctions, NodeOperationError } from 'n8n-workflow';
import { codeqrApiRequest } from '../codeqrApiRequest';

export async function deleteLink(ef: IExecuteFunctions) {
	try {
		// Obter o ID do link a partir dos parâmetros do nó
		const linkId = ef.getNodeParameter('linkId', 0) as string;

		// Fazer a requisição à API
		return await codeqrApiRequest.call(ef, 'DELETE', `/links/${linkId}`);
	} catch (error) {
		const errorData = {
			success: false,
			error: {
				message: error.message,
				details: error.details || 'An error occurred while deleting the link.',
				code: error.code || 'UNKNOWN_ERROR',
				timestamp: new Date().toISOString(),
			},
		};

		if (!ef.continueOnFail()) {
			throw new NodeOperationError(ef.getNode(), error.message, {
				message: errorData.error.message,
				description: errorData.error.details,
			});
		}

		return {
			json: errorData,
			error: errorData,
		};
	}
}
