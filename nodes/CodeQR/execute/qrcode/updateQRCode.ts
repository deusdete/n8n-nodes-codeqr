import { IDataObject, IExecuteFunctions, NodeOperationError } from 'n8n-workflow';
import { codeqrApiRequest } from '../codeqrApiRequest';

export async function updateQRCode(ef: IExecuteFunctions) {
	try {
		// Get node parameters
		const qrCodeId = ef.getNodeParameter('qrCodeId', 0) as string;
		const updateFields = ef.getNodeParameter('updateFields', 0) as IDataObject;

		const body: IDataObject = {};

		// Add update fields to the request body if provided
		if (updateFields.type) {
			body.type = updateFields.type as string;
		}

		if (updateFields.static !== undefined) {
			body.static = updateFields.static as boolean;
		}

		if (updateFields.text) {
			body.text = updateFields.text as string;
		}

		if (updateFields.url) {
			body.url = updateFields.url as string;
		}

		if (updateFields.email) {
			body.email = updateFields.email as IDataObject;
		}

		if (updateFields.phone) {
			body.phone = updateFields.phone as string;
		}

		if (updateFields.expiresAt) {
			body.expires_at = updateFields.expiresAt as string;
		}

		if (updateFields.trackConversion !== undefined) {
			body.track_conversion = updateFields.trackConversion as boolean;
		}

		if (updateFields.title) {
			body.title = updateFields.title as string;
		}

		if (updateFields.description) {
			body.description = updateFields.description as string;
		}

		if (updateFields.image) {
			body.image = updateFields.image as string;
		}

		if (updateFields.bgColor) {
			body.bg_color = updateFields.bgColor as string;
		}

		if (updateFields.fgColor) {
			body.fg_color = updateFields.fgColor as string;
		}

		if (updateFields.size) {
			body.size = updateFields.size as number;
		}

		if (updateFields.showLogo !== undefined) {
			body.show_logo = updateFields.showLogo as boolean;
		}

		if (updateFields.publicStats !== undefined) {
			body.public_stats = updateFields.publicStats as boolean;
		}

		// Make the API request
		return await codeqrApiRequest.call(ef, 'PUT', `/qrcodes/${qrCodeId}`, body);
	} catch (error) {
		const errorData = {
			success: false,
			error: {
				message: error.message,
				details: error.details || 'An error occurred while updating the QR code.',
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
