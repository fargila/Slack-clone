import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  isAuthenticatedNextjs,
  nextjsMiddlewareRedirect
} from "@convex-dev/auth/nextjs/server";

const isPublicPage = createRouteMatcher(["/auth"]);

export default convexAuthNextjsMiddleware((request) => {
  // If user is NOT authenticated and trying to access any page (including root)
  if (!isAuthenticatedNextjs() && !isPublicPage(request)) {
    return nextjsMiddlewareRedirect(request, "/auth");
  }

  // If user IS authenticated and trying to access public auth page
  if (isPublicPage(request)) {
    return nextjsMiddlewareRedirect(request, "/");
  }

  // Additional case: redirect root path to auth if not authenticated
  if (!isAuthenticatedNextjs() && request.nextUrl.pathname === "/") {
    return nextjsMiddlewareRedirect(request, "/auth");
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};