import { json } from '@sveltejs/kit';

export function GET() {
	return json({
		version: '1.0.0',
		siteTitle: 'Residenza Angelica',
		description: 'Luxury hotel residence with premium services'
	});
}
