import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Show } from "@clerk/react";
import { FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const DISMISS_KEY = "portfolio-gate-dismissed";

/**
 * A one-time welcome screen shown before the main portfolio. Visitors can
 * link their Google account (their name + photo then personalize the site
 * automatically) or continue as a guest — the portfolio itself always
 * stays reachable without signing in.
 */
export function LinkAccountGate() {
  const [dismissed, setDismissed] = useState<boolean>(() =>
    Boolean(sessionStorage.getItem(DISMISS_KEY)),
  );

  const dismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  return (
    <Show when="signed-out">
      <AnimatePresence>
        {!dismissed && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background px-4"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background" />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass w-full max-w-md rounded-3xl p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FiUser size={28} />
              </div>
              <h2 className="mb-3 text-2xl font-black">مرحباً بك 👋</h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                اربط حسابك على Google لتخصيص الموقع باسمك وصورتك الشخصية
                تلقائياً، أو تابع كزائر لمشاهدة الموقع كما هو.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/sign-in"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-[#1f1f1f] shadow-sm border border-border hover:shadow-md transition-all"
                >
                  <FcGoogle size={22} />
                  تسجيل الدخول عبر Google
                </Link>
                <button
                  onClick={dismiss}
                  className="w-full rounded-xl px-6 py-4 font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                >
                  متابعة كزائر
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Show>
  );
}
