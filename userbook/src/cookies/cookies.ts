"use server";

import { cookies } from "next/headers";

const COOKIE_SESSION_NAME = "session cookie name";

export const setCookieSession = async (id: number) => {
  const cookieSession = await cookies();
  cookieSession.set(COOKIE_SESSION_NAME, String(id), {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    sameSite: "lax",
  });
};

export const deleteCookieSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_SESSION_NAME);
};

const getCookieSessionValue = async (): Promise<number | null> => {
  const cookieStore = await cookies();
  const id = cookieStore.get(COOKIE_SESSION_NAME)?.value;
  return id ? Number(id) : null;
};

export const checkAuthSessionExpired = async () => {
  try {
    const myId = await getCookieSessionValue();
    if (!myId) throw new Error("Unauthorized");
  } catch (e) {
    console.log(e + "\n");
  }
};
