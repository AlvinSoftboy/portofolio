import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex justify-center items-center bg-background px-4 min-h-screen">
      <div className="max-w-md text-center">
        <h1 className="font-bold text-foreground text-7xl">404</h1>
        <h2 className="mt-4 font-semibold text-foreground text-xl">Page not found</h2>
        <p className="mt-2 text-muted-foreground text-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex justify-center items-center bg-primary hover:bg-primary/90 px-4 py-2 rounded-md font-medium text-primary-foreground text-sm transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex justify-center items-center bg-background px-4 min-h-screen">
      <div className="max-w-md text-center">
        <h1 className="font-semibold text-foreground text-xl tracking-tight">
          This page didn't load
        </h1>
        <p className="mt-2 text-muted-foreground text-sm">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex justify-center items-center bg-primary hover:bg-primary/90 px-4 py-2 rounded-md font-medium text-primary-foreground text-sm transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex justify-center items-center bg-background hover:bg-accent px-4 py-2 border border-input rounded-md font-medium text-foreground text-sm transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
