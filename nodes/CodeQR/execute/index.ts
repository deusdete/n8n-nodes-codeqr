import { IExecuteFunctions } from 'n8n-workflow';
import { createLink } from './link/createLink';
import { deleteLink } from './link/deleteLink';
import { retrieveLink } from './link/retrieveLink';
import { updateLink } from './link/updateLink';
import { createQRCode } from './qrcode/createQRCode';
import { deleteQRCode } from './qrcode/deleteQRCode';
import { retrieveQRCode } from './qrcode/retrieveQRCode';
import { updateQRCode } from './qrcode/updateQRCode';

type ResourceOperationFunctions = {
	[resource: string]: {
		[operation: string]: (ef: IExecuteFunctions) => Promise<any>;
	};
};

// este dicionario é utilizado para mapear as operações disponíveis para cada recurso e operação para cada função
export const resourceOperationsFunctions: ResourceOperationFunctions = {
	link: {
		get: retrieveLink,
		create: createLink,
		update: updateLink,
		delete: deleteLink,
	},
	qrcode: {
		get: retrieveQRCode,
		create: createQRCode,
		update: updateQRCode,
		delete: deleteQRCode,
	},
};
