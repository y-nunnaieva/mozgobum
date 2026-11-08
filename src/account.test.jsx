// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/preact";

const SESSION_KEY = "sb-dpgueseaeqhjytqpqxuo-auth-token";
const getSession = vi.fn();

vi.mock("@supabase/supabase-js", () => ({
  createClient: () => ({
    auth: { getSession },
    from: () => {
      const query = {
        select: () => query,
        eq: () => query,
        single: () => Promise.resolve({ data: { id: "kid", nick: "kid", role: "child" }, error: null }),
        then: (done) => Promise.resolve({ data: [], error: null }).then(done),
      };
      return query;
    },
  }),
}));

const session = { data: { session: { user: { id: "kid" } } }, error: null };
const failed = { data: { session: null }, error: new Error("Failed to fetch") };

async function startSignedIn() {
  vi.resetModules();
  const { startAccount, useAccount } = await import("./account.js");
  const Status = () => <p>{useAccount().status}</p>;
  localStorage.setItem(SESSION_KEY, "{}");
  getSession.mockResolvedValue(session);
  startAccount();
  render(<Status />);
  await waitFor(() => screen.getByText("child"));
}

const wakeUp = () => document.dispatchEvent(new Event("visibilitychange"));
const settle = () => new Promise((r) => setTimeout(r, 20));

beforeEach(() => {
  document.body.innerHTML = "";
  localStorage.clear();
  getSession.mockReset();
});

describe("account after the phone wakes up", () => {
  it("stays signed in when the session cannot be refreshed yet", async () => {
    await startSignedIn();
    getSession.mockResolvedValue(failed);
    wakeUp();
    await settle();
    expect(screen.getByText("child")).toBeTruthy();
  });

  it("signs out when the session is really gone", async () => {
    await startSignedIn();
    localStorage.removeItem(SESSION_KEY);
    getSession.mockResolvedValue(failed);
    wakeUp();
    await waitFor(() => screen.getByText("guest"));
  });

  it("comes back when the page was opened offline", async () => {
    vi.resetModules();
    const { startAccount, useAccount } = await import("./account.js");
    const Status = () => <p>{useAccount().status}</p>;
    localStorage.setItem(SESSION_KEY, "{}");
    getSession.mockResolvedValue(failed);
    startAccount();
    render(<Status />);
    await waitFor(() => screen.getByText("guest"));

    getSession.mockResolvedValue(session);
    window.dispatchEvent(new Event("online"));
    await waitFor(() => screen.getByText("child"));
  });
});
