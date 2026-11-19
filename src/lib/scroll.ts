/**
 * @file src/lib/scroll.ts
 * Lightweight momentum scroll observer and reading progress engine.
 * Inspired by Lenis, pure TypeScript, zero side effects or bundle fragility.
 */

export interface ScrollProgressSnapshot {
  progress: number; // 0.0 to 1.0
  scrollY: number;
  direction: "up" | "down" | "idle";
  isScrolledPastHero: boolean;
}

type ScrollSubscriber = (snapshot: ScrollProgressSnapshot) => void;

class MomentumScrollEngine {
  private subscribers: Set<ScrollSubscriber> = new Set();
  private lastY = 0;
  private isListening = false;

  public subscribe(cb: ScrollSubscriber): () => void {
    this.subscribers.add(cb);
    if (!this.isListening && typeof window !== "undefined") {
      this.initListener();
    }
    return () => {
      this.subscribers.delete(cb);
      if (this.subscribers.size === 0 && typeof window !== "undefined") {
        window.removeEventListener("scroll", this.handleScroll);
        this.isListening = false;
      }
    };
  }

  private handleScroll = () => {
    const currentY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(Math.max(currentY / docHeight, 0), 1) : 0;
    const direction = currentY > this.lastY ? "down" : currentY < this.lastY ? "up" : "idle";

    const snapshot: ScrollProgressSnapshot = {
      progress,
      scrollY: currentY,
      direction,
      isScrolledPastHero: currentY > 400,
    };

    this.lastY = currentY;
    for (const sub of this.subscribers) {
      sub(snapshot);
    }
  };

  private initListener() {
    this.isListening = true;
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();
  }

  public scrollToTop(smooth = true) {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  }
}

export const scrollEngine = new MomentumScrollEngine();
