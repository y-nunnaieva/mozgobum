// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/preact";
import { App } from "./App.jsx";

const goTo = async (hash) => {
  await act(() => {
    location.hash = hash;
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  });
};

beforeEach(() => {
  window.matchMedia ??= () => ({ matches: false });
  localStorage.clear();
  location.hash = "";
});
afterEach(cleanup);

describe("app shell", () => {
  it("shows the start page with all subjects", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Cześć!" })).toBeTruthy();
    expect(screen.getAllByRole("link", { name: /Historia/ }).length).toBeGreaterThan(1);
  });

  it("opens a subject page with its chapters and quizzes", async () => {
    render(<App />);
    await goTo("#/historia");
    expect(screen.getByRole("heading", { name: "Historia" })).toBeTruthy();
    expect(screen.getByText("2.2 Wojny z Persami").closest("li")).toBeTruthy();
    expect(screen.queryByRole("link", { name: /2\.2 Wojny z Persami/ })).toBeNull();
    const nav = document.querySelector("#subject-nav");
    expect(nav.querySelector("[aria-current]").textContent).toContain("Historia");
  });

  it("opens a chapter page with quiz cards", async () => {
    render(<App />);
    await goTo("#/historia/2");
    expect(screen.getByRole("heading", { name: "Starożytna Grecja" })).toBeTruthy();
    expect(screen.getByRole("link", { name: /Graj/ }).getAttribute("href")).toBe("#/historia/2/sprawdzian");
    expect(screen.getByRole("link", { name: /Statystyki/ }).getAttribute("href")).toBe("#/historia/2/sprawdzian/statystyki");
  });

  it("opens a stats page for a quiz", async () => {
    localStorage.setItem("szkolne-quizy:stats:v1", JSON.stringify({ units: { "historia/2/2.1/0001": { asked: 2, wrong: 1, streak: 1 } } }));
    render(<App />);
    await goTo("#/historia/2/2.1/statystyki");
    expect(screen.getByRole("heading", { name: /Statystyki/ })).toBeTruthy();
    expect(screen.getAllByText("odpowiedzi 2, błędy 1")).toHaveLength(1);
    localStorage.clear();
  });

  it("shows mastery progress on a quiz page", async () => {
    localStorage.setItem("szkolne-quizy:stats:v1", JSON.stringify({ units: { "historia/2/2.1/0001": { asked: 2, wrong: 0, streak: 2 }, "historia/2/2.1/0002": { asked: 1, wrong: 1, streak: 0 } } }));
    render(<App />);
    await goTo("#/historia/2/2.1");
    expect(screen.queryByText(/^Opanowane/)).toBeNull();
    expect(screen.getAllByText(/^1\/\d+ pytań · 1 trudne$/)).toHaveLength(1);
    localStorage.clear();
  });

  it("shows progress on chapter banners", async () => {
    localStorage.setItem("szkolne-quizy:stats:v1", JSON.stringify({ units: { "historia/2/2.1/0001": { asked: 1, wrong: 1, streak: 0 } } }));
    render(<App />);
    await goTo("#/historia/2");
    expect(screen.getByText(/^0\/\d+ pyta\S+ · 1 trudne$/)).toBeTruthy();
    expect(screen.getByText(/^0\/\d+ pyta\S+ · podrozdziały 2\.1, 2\.2$/)).toBeTruthy();
    expect(screen.getByRole("link", { name: /Moje trudne pytania/ }).getAttribute("href")).toBe("#/historia/2/trudne");
    localStorage.clear();
  });

  it("locks the menus only while a round is played", async () => {
    render(<App />);
    await goTo("#/historia/2/2.1");
    const list = () => document.querySelector("#subject-nav .nav-list");
    const menuBtn = () => screen.getByRole("button", { name: "Przedmioty" });
    expect(list().inert).toBeFalsy();

    fireEvent.click(screen.getByRole("button", { name: /Wszystko/ }));
    expect(list().classList.contains("nav-list--locked")).toBe(true);
    expect(list().hasAttribute("inert")).toBe(true);
    expect(menuBtn().disabled).toBe(true);

    fireEvent.click(screen.getByRole("button", { name: "Wyjdź" }));
    expect(list().hasAttribute("inert")).toBe(false);
    expect(menuBtn().disabled).toBe(false);
  });

  it("links back from a quiz to its chapter", async () => {
    render(<App />);
    await goTo("#/historia/2/2.1");
    expect(screen.getByRole("link", { name: /Rozdział 2/ }).getAttribute("href")).toBe("#/historia/2");
  });
});
