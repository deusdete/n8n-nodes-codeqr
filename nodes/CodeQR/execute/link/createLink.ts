import { IDataObject, IExecuteFunctions, NodeOperationError } from 'n8n-workflow';
import { codeqrApiRequest } from '../codeqrApiRequest';

export async function createLink(ef: IExecuteFunctions) {
	try {
		// Obter parâmetros do nó
		const url = ef.getNodeParameter('url', 0) as string;
		const additionalFields = ef.getNodeParameter('additionalFields', 0) as IDataObject;

		// Construir o corpo da requisição
		const body: IDataObject = {
			url,
		};

		// Adicionar campos adicionais ao corpo, se fornecidos
		if (additionalFields.key) {
			body.key = additionalFields.key as string;
		}
		if (additionalFields.domain) {
			body.domain = additionalFields.domain as string;
		}
		if (additionalFields.externalId) {
			body.external_id = additionalFields.externalId as string;
		}
		if (additionalFields.password) {
			body.password = additionalFields.password as string;
		}
		if (additionalFields.flexible) {
			body.flexible = additionalFields.flexible as boolean;
		}
		if (additionalFields.title) {
			body.title = additionalFields.title as string;
		}
		if (additionalFields.description) {
			body.description = additionalFields.description as string;
		}
		if (additionalFields.image) {
			body.image = additionalFields.image as string;
		}
		if (additionalFields.video) {
			body.video = additionalFields.video as string;
		}
		if (additionalFields.proxy) {
			body.proxy = additionalFields.proxy as boolean;
		}
		if (additionalFields.rewrite) {
			body.rewrite = additionalFields.rewrite as boolean;
		}
		if (additionalFields.ios) {
			body.ios = additionalFields.ios as string;
		}
		if (additionalFields.android) {
			body.android = additionalFields.android as string;
		}
		if (additionalFields.doIndex) {
			body.do_index = additionalFields.doIndex as boolean;
		}
		if (additionalFields.comments) {
			body.comments = additionalFields.comments as string;
		}
		if (additionalFields.expiresAt) {
			body.expires_at = additionalFields.expiresAt as string;
		}
		if (additionalFields.expiredUrl) {
			body.expired_url = additionalFields.expiredUrl as string;
		}
		if (additionalFields.geo) {
			body.geo = additionalFields.geo as IDataObject;
		}
		if (additionalFields.publicStats) {
			body.public_stats = additionalFields.publicStats as boolean;
		}
		if (additionalFields.tagIds) {
			body.tag_ids = additionalFields.tagIds as string[];
		}
		if (additionalFields.tagNames) {
			body.tag_names = additionalFields.tagNames as string[];
		}

		// Fazer a requisição à API
		return await codeqrApiRequest.call(ef, 'POST', '/links', body);
	} catch (error) {
		const errorData = {
			success: false,
			error: {
				message: error.message,
				details: error.details || 'An error occurred while creating the link.',
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
