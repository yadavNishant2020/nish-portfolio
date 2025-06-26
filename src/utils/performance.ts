// Performance monitoring utilities
export const performanceMetrics = {
  // Measure component render time
  measureRender: (componentName: string, renderFn: () => void) => {
    const start = performance.now();
    renderFn();
    const end = performance.now();
    console.log(`${componentName} render time: ${end - start}ms`);
  },

  // Report Core Web Vitals
  reportWebVitals: () => {
    if ("PerformanceObserver" in window) {
      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log("LCP:", lastEntry.startTime);
      }).observe({ type: "largest-contentful-paint", buffered: true });

      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if ("processingStart" in entry) {
            console.log("FID:", entry.processingStart - entry.startTime);
          }
        });
      }).observe({ type: "first-input", buffered: true });

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let cumulativeScore = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            cumulativeScore += entry.value;
          }
        });
        console.log("CLS:", cumulativeScore);
      }).observe({ type: "layout-shift", buffered: true });
    }
  },

  // Preload critical resources
  preloadResource: (href: string, as: string, type?: string) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  },

  // Lazy load images with intersection observer
  lazyLoadImage: (img: HTMLImageElement, src: string) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.src = src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });
    observer.observe(img);
  },
};

// Bundle analyzer helper (development only)
export const analyzeBundleSize = () => {
  if (
    typeof process !== "undefined" &&
    process.env?.NODE_ENV === "development"
  ) {
    const scripts = document.querySelectorAll("script[src]");
    scripts.forEach((script) => {
      fetch((script as HTMLScriptElement).src)
        .then((response) => response.blob())
        .then((blob) => {
          console.log(
            `Script size: ${blob.size} bytes - ${
              (script as HTMLScriptElement).src
            }`
          );
        });
    });
  }
};
