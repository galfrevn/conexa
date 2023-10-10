import { NextRequest } from 'next/server';
import { environmentVariables } from '@conexa/environment';

const starwarsProxy = async (request: NextRequest) => {
  try {
    const requestedDestination = request.nextUrl.pathname.replace('/api', '');
    const requestedSearchParams = request.nextUrl.searchParams.toString();

    const redirectedResponse = await fetch(
      `${environmentVariables.API_URL}${requestedDestination}?${requestedSearchParams}`,
      {
        method: request.method,
        headers: { 'x-api-key': environmentVariables.API_KEY },
      },
    );

    return Response.json(await redirectedResponse.json(), {
      status: redirectedResponse.status,
      headers: {
        'content-type': redirectedResponse.headers['content-type'],
      },
    });
  } catch (error) {
    console.error(error);

    return Response.json(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
};

export {
  starwarsProxy as GET,
  starwarsProxy as POST,
  starwarsProxy as PUT,
  starwarsProxy as PATCH,
  starwarsProxy as DELETE,
};
