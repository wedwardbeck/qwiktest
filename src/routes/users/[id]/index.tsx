import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';

// interface User {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     address: {
//         street: string;
//         suite: string;
//         city: string;
//         zipcode: string;
//         geo: {
//             lat: string;
//             lng: string;
//         };
//     };
//     phone: string;
//     website: string;
//     company: {
//         name: string;
//         catchPhrase: string;
//         bs: string;
//     };
// }
// export const getUser = routeLoader$(async ({ params }) => {
// // export const getUser: RequestHandler = async ({ json, params }) => {
//     const id = params.id;
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/' + {id});
//     const user = await response.json();
//     return user;
//  });

// export const cleanUpParams = (params: Record<string, string>) => {
// 	if ('id' in params && params.id[params.id.length - 1] === '/') {
// 		params.id = params.id.slice(0, params.id.length - 1);
// 	}
// 	return params;
// };

 export const useUserLoader = routeLoader$(async ({ params }) => {
	const id = params.id;
	const response  = await fetch(`https://jsonplaceholder.typicode.com/users/${id})`);
    const user = await response.json();
	return user;
});


export default component$(() => {

  const user = useUserLoader();
  return (
        <div>
            {(user.value && user.value)} detail here
        </div>
      )

});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
