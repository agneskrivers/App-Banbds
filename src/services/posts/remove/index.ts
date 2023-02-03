// Configs
import { host } from '@configs';

// Interfaces
import type { ResJSON } from '@interfaces';

// Type
type Result =
	| 'UnauthorizedDevice'
	| 'UnauthorizedUser'
	| 'BadRequest'
	| boolean;

// Function Type
type ServicePostRemove = (
	signal: AbortSignal,
	device: string,
	user: string,
	postID: number,
) => Promise<Result>;

const Index: ServicePostRemove = async (signal, device, user, postID) => {
	const uri = `${host}/api-gateway/posts/${postID}`;

	try {
		const response = await fetch(uri, {
			method: 'DELETE',
			headers: {
				Authorization: user,
				'Content-Type': 'application/json',
				'x-banbds-device-token': device,
			},
		});
		const result = (await response.json()) as ResJSON;

		if (result.status === 'Unauthorized') {
			if (result.message === 'device') return 'UnauthorizedDevice';

			if (result.message === 'Unauthorized') return 'UnauthorizedUser';
		}

		if (result.status === 'Not Process') return 'BadRequest';

		if (result.status !== 'Success') return false;

		return true;
	} catch (error) {
		return false;
	}
};

export default Index;
