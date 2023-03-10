// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { jwtVerify } from 'jose';

// export async function middleware(request: NextRequest) {
//   const cookie = request.cookies.get('token')?.value;

//   if (!cookie) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   try {
//     await jwtVerify(cookie, new TextEncoder().encode('secret'));
//     return NextResponse.next();
//   } catch (error) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/login/:path*'],
// };
