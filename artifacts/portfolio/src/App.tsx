import { useEffect, useRef } from "react";
import { ClerkProvider } from "@clerk/react";
import { publishableKeyFromHost } from "@clerk/react/internal";
import { ThemeProvider } from "@/components/theme-provider";
import { AccentColorProvider } from "@/components/accent-color-provider";
import { SiteNameProvider } from "@/components/site-name-provider";
import { ProfilePhotoProvider } from "@/components/profile-photo-provider";
import { ClerkIdentitySync } from "@/components/auth/clerk-identity-sync";
import { clerkAppearance } from "@/components/auth/clerk-appearance";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation, Router as WouterRouter } from "wouter";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import SignInPage from "@/pages/sign-in";
import SignUpPage from "@/pages/sign-up";

// REQUIRED — copy verbatim. Resolves the key from window.location.hostname so the
// same build serves multiple Clerk custom domains.
const clerkPubKey = publishableKeyFromHost(
  window.location.hostname,
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
);

// REQUIRED — copy verbatim. Empty in dev, auto-set in prod.
const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL;

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function stripBase(path: string): string {
  return basePath && path.startsWith(basePath)
    ? path.slice(basePath.length) || "/"
    : path;
}

if (!clerkPubKey) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY in .env file");
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sign-in/*?" component={SignInPage} />
      <Route path="/sign-up/*?" component={SignUpPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ClerkProviderWithRoutes() {
  const [, setLocation] = useLocation();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      proxyUrl={clerkProxyUrl}
      appearance={clerkAppearance}
      signInUrl={`${basePath}/sign-in`}
      signUpUrl={`${basePath}/sign-up`}
      localization={{
        socialButtonsBlockButton: "الاستمرار باستخدام {{provider|titleize}}",
        dividerText: "أو",
        formFieldLabel__emailAddress: "البريد الإلكتروني",
        formFieldLabel__password: "كلمة المرور",
        formFieldInputPlaceholder__emailAddress: "أدخل بريدك الإلكتروني",
        formFieldInputPlaceholder__password: "أدخل كلمة المرور",
        formButtonPrimary: "متابعة",
        footerPageLink__help: "مساعدة",
        footerPageLink__privacy: "الخصوصية",
        footerPageLink__terms: "الشروط",
        signIn: {
          start: {
            title: "مرحباً بعودتك",
            subtitle: "سجّل الدخول لتخصيص الموقع باسمك وصورتك",
            actionText: "ليس لديك حساب؟",
            actionLink: "إنشاء حساب",
          },
        },
        signUp: {
          start: {
            title: "أنشئ حسابك",
            subtitle: "اربط حسابك على Google للبدء",
            actionText: "لديك حساب مسبقاً؟",
            actionLink: "تسجيل الدخول",
          },
        },
      }}
      routerPush={(to) => setLocation(stripBase(to))}
      routerReplace={(to) => setLocation(stripBase(to), { replace: true })}
    >
      <ClerkIdentitySync />
      <Router />
    </ClerkProvider>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <AccentColorProvider>
        <SiteNameProvider>
          <ProfilePhotoProvider>
            <TooltipProvider>
              <WouterRouter base={basePath}>
                <ClerkProviderWithRoutes />
              </WouterRouter>
              <Toaster />
            </TooltipProvider>
          </ProfilePhotoProvider>
        </SiteNameProvider>
      </AccentColorProvider>
    </ThemeProvider>
  );
}

export default App;
