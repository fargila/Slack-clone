import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  isAuthenticatedNextjs,
  nextjsMiddlewareRedirect
} from "@convex-dev/auth/nextjs/server";

const isPublicPage = createRouteMatcher(["/auth"]);

export default convexAuthNextjsMiddleware((request) => {
  // In maintenance
  // if (!isPublicPage(request) && !isAuthenticatedNextjs()) {
  //   return nextjsMiddlewareRedirect(request, "/auth");
  // }

  // if (isPublicPage(request)) {
  //   return nextjsMiddlewareRedirect(request, "/")
  }
//}
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
