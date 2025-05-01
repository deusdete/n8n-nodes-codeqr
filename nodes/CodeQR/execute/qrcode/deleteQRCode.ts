import { IExecuteFunctions, NodeOperationError } from 'n8n-workflow';
import { codeqrApiRequest } from '../codeqrApiRequest';

export async function deleteQRCode(ef: IExecuteFunctions) {
	try {
		// Get the QR code ID from node parameters
		const qrcodeId = ef.getNodeParameter('qrcodeId', 0) as string;

		// Make the API request
		return await codeqrApiRequest.call(ef, 'DELETE', `/qrcodes/${qrcodeId}`);
	} catch (error) {
		const errorData = {
			success: false,
			error: {
				message: error.message,
				details: error.details || 'An error occurred while deleting the QR code.',
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
