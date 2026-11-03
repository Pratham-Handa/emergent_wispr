import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { LanguageProvider } from "@/components/LanguageContext";
import { scrollToLocation } from "@/lib/routeScroll";
import Engineering from "@/pages/Engineering";
import Community from "@/pages/Community";
import Product from "@/pages/Product";

jest.mock("framer-motion", () => {
  const React = require("react");
  const motion = new Proxy({}, {
    get: (_, tag) => React.forwardRef(({ children, initial, animate, whileInView, viewport, transition, variants, custom, onAnimationComplete, ...props }, ref) => React.createElement(tag, { ...props, ref }, children)),
  });
  return { motion, useReducedMotion: () => false };
});

let root;
let host;

function renderPage(Page, path) {
  host = document.createElement("div");
  document.body.appendChild(host);
  root = createRoot(host);
  act(() => {
    root.render(
      <MemoryRouter initialEntries={[path]}>
        <LanguageProvider><Page /></LanguageProvider>
      </MemoryRouter>
    );
  });
  return host;
}

afterEach(() => {
  if (root) act(() => root.unmount());
  host?.remove();
  root = null;
  host = null;
  delete window.__lenis;
  jest.restoreAllMocks();
});

describe("portfolio platform pages", () => {
  test("engineering page renders its work and ticket-counter route", () => {
    const view = renderPage(Engineering, "/engineering");
    const main = view.querySelector('[data-testid="engineering-platform"]');
    expect(main).not.toBeNull();
    expect(main.textContent).toContain("Ideas into");
    expect(main.textContent).toContain("SentinelSecure");
    expect(main.textContent).toContain("EcoStyle Agent");
    expect(main.textContent).toContain("Wingtern");
    expect(main.querySelector('[data-testid="ticket-counter-return"]')?.getAttribute("href")).toBe("/#booking");
  });

  test("community page leads with competitions and keeps college roles last", () => {
    const view = renderPage(Community, "/events");
    const main = view.querySelector('[data-testid="community-platform"]');
    const cards = Array.from(main.querySelectorAll('[data-testid="community-moment-cards"] > article'));
    expect(main).not.toBeNull();
    expect(cards).toHaveLength(6);
    expect(cards[0].textContent).toContain("Enthusiac");
    expect(cards[0].textContent).toContain("First Prize");
    expect(cards[1].textContent).toContain("AI Builders Hackathon");
    expect(cards.slice(-3).map((card) => card.textContent).join(" ")).toContain("Communications Directorate");
    expect(cards.slice(-3).map((card) => card.textContent).join(" ")).toContain("Fiestron 2024");
    expect(cards.slice(-3).map((card) => card.textContent).join(" ")).toContain("Sports Committee");
    expect(main.querySelector('[data-testid="ticket-counter-return"]')?.getAttribute("href")).toBe("/#booking");
  });

  test("product page renders the full-green product section and project cases", () => {
    const view = renderPage(Product, "/product");
    const main = view.querySelector('[data-testid="product-platform"]');
    expect(main).not.toBeNull();
    expect(main.textContent).toContain("whole thing work");
    expect(main.textContent).toContain("From user problem to useful system");
    expect(main.textContent).toContain("EcoStyle Agent");
    expect(main.textContent).toContain("Wingtern");
    expect(main.querySelector('[data-testid="ticket-counter-return"]')?.getAttribute("href")).toBe("/#booking");
  });
});

describe("ticket-counter return navigation", () => {
  test("a /#booking route scrolls to the booking section rather than the hero", () => {
    const scrollIntoView = jest.fn();
    const section = document.createElement("section");
    section.id = "booking";
    section.scrollIntoView = scrollIntoView;
    document.body.appendChild(section);
    expect(scrollToLocation("/", "#booking")).toBe(true);
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth", block: "start" });
    expect(scrollToLocation("/engineering", "#booking")).toBe(false);
    section.remove();
  });

  test("the smooth-scroll library receives the booking target when available", () => {
    const lenis = { scrollTo: jest.fn() };
    window.__lenis = lenis;
    const section = document.createElement("section");
    section.id = "booking";
    document.body.appendChild(section);

    expect(scrollToLocation("/", "#booking")).toBe(true);
    expect(lenis.scrollTo).toHaveBeenCalledWith(section, { offset: -72, duration: 0.65 });
    section.remove();
  });
});
