import { vi } from "vitest";

const mockAuth = {
  createUserAndRetrieveDataWithEmailAndPassword: vi.fn((email, password) =>
    Promise.resolve(true)
  ),
  sendPasswordResetEmail: vi.fn(() => Promise.resolve(true)),
  signInAndRetrieveDataWithEmailAndPassword: vi.fn((email, password) =>
    Promise.resolve(true)
  ),
  fetchSignInMethodsForEmail: vi.fn(() => Promise.resolve(true)),
  signOut: vi.fn(() => {
    Promise.resolve(true);
  }),
  onAuthStateChanged: vi.fn(),
  currentUser: {
    sendEmailVerification: vi.fn(() => Promise.resolve(true)),
  },
};

const authMock = vi.fn(() => mockAuth);

export default authMock;
