import { IDataObject, IExecuteFunctions, NodeOperationError } from 'n8n-workflow';
import { codeqrApiRequest } from '../codeqrApiRequest';

export async function createQRCode(ef: IExecuteFunctions) {
	try {
		// Get node parameters
		const qrType = ef.getNodeParameter('type', 0) as string;
		const isStatic = ef.getNodeParameter('static', 0) as boolean;

		// Build the request body
		const body: IDataObject = {
			type: qrType,
			static: isStatic,
		};

		// Add type-specific fields
		if (qrType === 'text' && ef.getNodeParameter('text', 0)) {
			body.text = ef.getNodeParameter('text', 0) as string;
		}

		if (ef.getNodeParameter('url', 0, '') !== '') {
			body.url = ef.getNodeParameter('url', 0) as string;
		}

		if (ef.getNodeParameter('email', 0, '') !== '') {
			body.email = ef.getNodeParameter('email', 0) as IDataObject;
		}

		if (ef.getNodeParameter('phone', 0, '') !== '') {
			body.phone = ef.getNodeParameter('phone', 0) as string;
		}

		// Add optional fields
		if (ef.getNodeParameter('expiresAt', 0, '') !== '') {
			body.expires_at = ef.getNodeParameter('expiresAt', 0) as string;
		}

		if (ef.getNodeParameter('trackConversion', 0, false) !== false) {
			body.track_conversion = ef.getNodeParameter('trackConversion', 0) as boolean;
		}

		if (ef.getNodeParameter('title', 0, '') !== '') {
			body.title = ef.getNodeParameter('title', 0) as string;
		}

		if (ef.getNodeParameter('description', 0, '') !== '') {
			body.description = ef.getNodeParameter('description', 0) as string;
		}

		if (ef.getNodeParameter('image', 0, '') !== '') {
			body.image = ef.getNodeParameter('image', 0) as string;
		}

		if (ef.getNodeParameter('bgColor', 0, '') !== '') {
			body.bg_color = ef.getNodeParameter('bgColor', 0) as string;
		}

		if (ef.getNodeParameter('fgColor', 0, '') !== '') {
			body.fg_color = ef.getNodeParameter('fgColor', 0) as string;
		}

		if (ef.getNodeParameter('size', 0, 300) !== 300) {
			body.size = ef.getNodeParameter('size', 0) as number;
		}

		if (ef.getNodeParameter('showLogo', 0, false) !== false) {
			body.show_logo = ef.getNodeParameter('showLogo', 0) as boolean;
		}

		if (ef.getNodeParameter('publicStats', 0, false) !== false) {
			body.public_stats = ef.getNodeParameter('publicStats', 0) as boolean;
		}

		// Make the API request
		return await codeqrApiRequest.call(ef, 'POST', '/qrcodes', body);
	} catch (error) {
		const errorData = {
			success: false,
			error: {
				message: error.message,
				details: error.details || 'An error occurred while creating the QR code.',
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
