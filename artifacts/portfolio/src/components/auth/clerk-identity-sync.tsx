import { useEffect, useRef } from "react";
import { useUser } from "@clerk/react";
import { useSiteName } from "@/components/site-name-provider";
import { useProfilePhoto } from "@/components/profile-photo-provider";

/**
 * When a visitor links their Google account, pull their display name and
 * profile photo from Clerk and apply them site-wide (hero name + photo).
 * Runs once per signed-in user so manual edits made afterward aren't
 * overwritten on every render.
 */
export function ClerkIdentitySync() {
  const { user, isSignedIn } = useUser();
  const { setName } = useSiteName();
  const { setPhoto } = useProfilePhoto();
  const syncedUserId = useRef<string | null>(null);

  useEffect(() => {
    if (!isSignedIn || !user) {
      syncedUserId.current = null;
      return;
    }
    if (syncedUserId.current === user.id) return;
    syncedUserId.current = user.id;

    const linkedName =
      user.fullName || `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();
    if (linkedName) setName(linkedName);
    if (user.imageUrl) setPhoto(user.imageUrl);
  }, [isSignedIn, user, setName, setPhoto]);

  return null;
}
