"use client";

export const checkPhoneNumber = (phoneNumber: string): boolean => {
  const digits = phoneNumber.split(" ").join("");
  return digits.length === 9;
};

export const checkLink = (link: string): boolean => {
  return link.includes("https:");
};

export const checkEmail = (email: string): boolean => {
  return email.includes("@");
};
