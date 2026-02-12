import { type Handle } from '@sveltejs/kit';

const ITALIAN_SLUGS = ['camere', 'galleria', 'servizi', 'contatti'];

export const handle: Handle = ({ event, resolve }) => {
	const path = event.url.pathname;
	const segments = path.split('/').filter(Boolean);

	// If path is /[slug] where slug is an Italian page, rewrite to /it/[slug]
	if (segments.length === 1 && ITALIAN_SLUGS.includes(segments[0])) {
		event.url.pathname = `/it/${segments[0]}`;
	}

	return resolve(event);
};
