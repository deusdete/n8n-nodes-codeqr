import {
	NodeApiError,
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription
} from 'n8n-workflow';

import { resourceOperationsFunctions } from './execute';
import { codeqrNodeProperties } from './properties';

export class Codeqr implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CodeQR',
		name: 'codeqr',
		icon: 'file:codeqr.svg',
		group: ['output'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume CodeQR API',
		defaults: {
			name: 'CodeQR',
		},
		// @ts-ignore
		inputs: ['main'],
		// @ts-ignore
		outputs: ['main'],
		credentials: [
			{
				name: 'codeqrApi',
				required: true,
				displayOptions: {
					show: {
						authentication: ['accessToken'],
					},
				},
			},
		],
		properties: [
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				options: [
					{
						name: 'Access Token',
						value: 'accessToken',
					},
				],
				default: 'accessToken',
			},
			...codeqrNodeProperties,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		// Busca a função para o recurso e operação selecionados
		const fn = resourceOperationsFunctions[resource][operation];

		// Se não encontrar a função, retorna um erro
		if (!fn) {
			throw new NodeApiError(this.getNode(), {
				message: 'Operação não suportada.',
				description: `A função "${operation}" para o recurso "${resource}" não é suportada!`,
			});
		}

		// Executa a função
		const responseData = await fn(this);

		// Retornar apenas o JSON
		return [this.helpers.returnJsonArray(responseData)];
	}
}
