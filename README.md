# @codewithrajat/rm-ng-structure-pdf

[![npm version](https://img.shields.io/npm/v/@codewithrajat/rm-ng-structure-pdf.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![Angular Support](https://img.shields.io/badge/angular-^14.0.0-brightgreen)
![Tree-shakable](https://img.shields.io/badge/tree--shaking-supported-success)
![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)
[![Downloads](https://img.shields.io/npm/dm/@codewithrajat/rm-ng-structure-pdf.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf)

---

`@codewithrajat/rm-ng-structure-pdf` is an Angular library with the primary goal of creating **truly structured, searchable, and accessible PDFs** directly from HTML content, moving beyond simple screenshot-to-PDF solutions.

> **Note:** 
>
> If you are looking for a stable, read-only PDF generator. please use the other  library: [`@codewithrajat/rm-ng-pdf-export`](https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-export). 
>This library, `@codewithrajat/rm-ng-structure-pdf`, is focused on the future of creating searchable, text-based documents.

---

### ✅ Solves

-   **Client-Side PDF Generation**: Creates PDFs in the browser without a backend server.
-   **Searchable & Selectable Text**: Generates PDFs with real text, not images.
-   **Accessibility**: Produces documents that screen readers can understand.
-   **High-Fidelity Output**: Aims to preserve the structure and style of your HTML content.

### 👤 Ideal For

-   Angular developers needing to generate reports, dashboards, or invoices.
-   Applications requiring professional PDF exports with clean, selectable text.
-   Teams looking for a long-term solution for dynamic and accessible PDF generation.

---

## 🚀 Features


| Feature | Description | Status |
|---------|-------------|---------|
| 🔍 **Searchable Text** | Generate PDFs with selectable, searchable content | ✅ |
| ♿ **Accessibility** | Screen reader compatible documents | ✅ |
| 🎨 **Style Preservation** | Maintain HTML/CSS styling in PDF output | ✅ |
| 📄 **Smart Pagination** | Intelligent page breaking and content flow | 🚧 |
| ⚙️ **Configurable** | Flexible page sizes, orientation, and metadata | ✅ |
| 🌳 **Tree-Shakable** | Optimized bundle size | ✅ |
| 🚀 **Client-Side** | No backend server required | ✅ |
---

## 🖼️ Live Demo

> [**See the implementation here**](https://stackblitz.com/edit/stackblitz-starters-lqnzau6p)

---

## 📦 Installation

### Package Manager

Choose your preferred package manager:

```bash
# npm
npm install @codewithrajat/rm-ng-structure-pdf

# yarn
yarn add @codewithrajat/rm-ng-structure-pdf

# pnpm
pnpm add @codewithrajat/rm-ng-structure-pdf
```

### Required Dependencies

Install the required peer dependencies:

```bash
npm install jspdf html2canvas
```

| Dependency | Version | Purpose |
|------------|---------|---------|
| `@angular/core` | ^14.0.0+ | Angular framework |
| `jspdf` | ^2.5.1 | PDF generation engine |
| `html2canvas` | ^1.4.1 | HTML rendering |


---

## 🧭 Compatibility Matrix

| Angular Version | Compatible | Standalone Support |
|-----------------|------------|--------------------|
| 14              | ✅         | ✅                 |
| 15              | ✅         | ✅                 |
| 16              | ✅         | ✅                 |
| 17+             | ✅         | ✅                 |

---

## 🚀 Usage

### Basic Implementation

```typescript
import { Component, ElementRef, ViewChild } from '@angular/core';
import { PdfService, PdfOptions } from '@codewithrajat/rm-ng-structure-pdf';

@Component({
  selector: 'app-report',
  template: `
    <div #pdfContent class="report-content">
      <h1>My Report</h1>
      <p>This content will be converted to PDF</p>
      <!-- Your content here -->
    </div>
    <button (click)="exportToPdf()" class="export-btn">
      Export to PDF
    </button>
  `
})
export class ReportComponent {
  @ViewChild('pdfContent') contentRef!: ElementRef<HTMLDivElement>;

  constructor(private pdfService: PdfService) {}

  exportToPdf() {
    const options: PdfOptions = {
      fileName: 'report.pdf',
      pageSize: 'a4',
      orientation: 'portrait',
      title: 'My Report',
      author: 'My App'
    };

    this.pdfService.generatePaginatedPdf(
      this.contentRef.nativeElement, 
      options
    );
  }
}
```

### Service Registration

For standalone components:
```typescript
import { PdfService } from '@codewithrajat/rm-ng-structure-pdf';

@Component({
  providers: [PdfService], // Add this line
  // ... rest of component
})
```

For module-based apps:
```typescript
import { PdfService } from '@codewithrajat/rm-ng-structure-pdf';

@NgModule({
  providers: [PdfService], // Add this line
  // ... rest of module
})
```

---

## ⚙️ Configuration

### PdfOptions Interface

```typescript
interface PdfOptions {
  fileName: string;           // Output file name
  pageSize: PageSize;         // Document page size
  orientation: Orientation;   // Page orientation
  title: string;             // PDF metadata title
  author: string;            // PDF metadata author
}

type PageSize = 'a4' | 'letter' | 'legal';
type Orientation = 'portrait' | 'landscape';
```

### Page Size Reference

| Size | Portrait (mm) | Landscape (mm) | Best For |
|------|---------------|----------------|----------|
| `a4` | 210 × 297 | 297 × 210 | International standard |
| `letter` | 215.9 × 279.4 | 279.4 × 215.9 | US standard |
| `legal` | 215.9 × 355.6 | 355.6 × 215.9 | Legal documents |

---


## ⚙️ Advanced Configuration

The `PdfOptions` interface allows you to configure the PDF output. In the current version, all options are mandatory as there are no predefined defaults.

| Option        | Type                               | Description                              | Default |
|---------------|------------------------------------|------------------------------------------|---------|
| `fileName`    | `string`                           | The name of the file to be downloaded.   | (none)  |
| `pageSize`    | `'a4' | 'letter' | 'legal'`      | The page size for the PDF document.      | (none)  |
| `orientation` | `'portrait' | 'landscape'`        | The page orientation.                    | (none)  |
| `title`       | `string`                           | The title metadata for the PDF document. | (none)  |
| `author`      | `string`                           | The author metadata for the PDF document.| (none)  |


---


## 💡 Examples

### Invoice Generation

```typescript
@Component({
  template: `
    <div #invoice class="invoice">
      <header class="invoice-header">
        <h1>Invoice #{{invoiceNumber}}</h1>
        <div class="company-info">...</div>
      </header>
      <table class="invoice-items">
        <!-- Invoice items -->
      </table>
      <footer class="invoice-footer">
        <div class="total">Total: {{total | currency}}</div>
      </footer>
    </div>
  `
})
export class InvoiceComponent {
  exportInvoice() {
    this.pdfService.generatePaginatedPdf(this.invoiceRef.nativeElement, {
      fileName: `invoice-${this.invoiceNumber}.pdf`,
      pageSize: 'letter',
      orientation: 'portrait',
      title: `Invoice ${this.invoiceNumber}`,
      author: 'Your Company'
    });
  }
}
```

### Report with Charts

```typescript
@Component({
  template: `
    <div #report class="report">
      <section class="charts">
        <canvas #chart1></canvas>
        <canvas #chart2></canvas>
      </section>
      <section class="data-tables">
        <!-- Tables and data -->
      </section>
    </div>
  `
})
export class DashboardComponent {
  async exportReport() {
    // Ensure charts are fully rendered
    await this.waitForChartsToRender();
    
    this.pdfService.generatePaginatedPdf(this.reportRef.nativeElement, {
      fileName: `dashboard-${new Date().toISOString().split('T')[0]}.pdf`,
      pageSize: 'a4',
      orientation: 'landscape', // Better for wide charts
      title: 'Dashboard Report',
      author: 'Analytics Team'
    });
  }
}
```

---


## 📝 Best Practices

### 🎯 Current Implementation (Image-Based)

> **Important**: The current version uses image slicing, which may cut content at page breaks.

#### Do's ✅

```html
<!-- Keep sections reasonably sized -->
<div class="section" style="margin-bottom: 20px;">
  <h2>Section Title</h2>
  <p>Content that fits comfortably in one page</p>
</div>

<!-- Use clear visual separators -->
<hr style="margin: 30px 0;" />

<!-- Design with export in mind -->
<div class="card" style="page-break-inside: avoid; margin-bottom: 15px;">
  <!-- Card content -->
</div>
```

#### Don'ts ❌

```html
<!-- Avoid very tall single elements -->
<div style="height: 2000px;">
  <!-- This might get cut across pages -->
</div>

<!-- Don't rely on CSS page-break properties (yet) -->
<div style="page-break-before: always;">
  <!-- This won't work in current version -->
</div>
```

### 🎨 Styling Tips

```css
/* PDF-friendly styles */
.pdf-content {
  font-family: Arial, sans-serif;  /* Web-safe fonts */
  color: #333;                     /* Good contrast */
  background: white;               /* Avoid transparent backgrounds */
  padding: 20px;                   /* Consistent spacing */
  max-width: 800px;               /* Reasonable width */
}

/* Avoid these in PDF content */
.avoid-in-pdf {
  position: fixed;        /* Fixed positioning issues */
  transform: scale(0.8);  /* Transforms may not render correctly */
  filter: blur(2px);      /* Complex filters */
}
```

### 📱 Responsive Considerations

```typescript
// Wait for content to load before exporting
async exportToPdf() {
  // For images
  await this.waitForImagesToLoad();
  
  // For dynamic content
  this.cdr.detectChanges();
  await new Promise(resolve => setTimeout(resolve, 100));
  
  this.pdfService.generatePaginatedPdf(/* ... */);
}
```

---

## 🧭 Compatibility

| Angular Version | Support | Standalone | Notes |
|-----------------|---------|------------|-------|
| 14.x | ✅ Full | ✅ Yes | Minimum required |
| 15.x | ✅ Full | ✅ Yes | Recommended |
| 16.x | ✅ Full | ✅ Yes | Recommended |
| 17.x | ✅ Full | ✅ Yes | Latest tested |
| 18.x+ | ✅ Expected | ✅ Yes | Should work |

### Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 80+ | ✅ Full |
| Firefox | 75+ | ✅ Full |
| Safari | 13+ | ✅ Full |
| Edge | 80+ | ✅ Full |

---

## 🎯 Smart Page Breaking (Vision vs. Reality)

The ultimate vision for this library is to provide intelligent page breaking that respects your content.

### ✨ The Goal:

-   **Content Boundary Detection**: Automatically avoid breaking content inside important elements.
-   **CSS `page-break` Support**: Respect CSS properties like `page-break-inside: avoid`.
-   **Visual Element Preservation**: Keep cards, images, and sections intact across pages.

### ⚠️ The Current Reality:

The current implementation uses an image-slicing technique. It renders the entire HTML element to one large image and then cuts it into page-sized chunks.

-   **This means content can be cut in half at a page break.**
-   The library **does not** currently support CSS `page-break` properties.

### 💡 Best Practices (For Current Version)

1.  **Design for Export**: If possible, structure your content in sections that are less than a full page in height.
2.  **Manual Breaks**: Leave empty space or clear visual separators in your HTML where you would like a page to break.
3.  **Test Content**: Export PDFs with varying amounts of content to see where the breaks occur and adjust your layout accordingly.

---

## 🌳 Tree-Shaking and Optimization

-   The library is marked as `sideEffects: false` to support advanced tree-shaking.
-   The service-based API is inherently tree-shakable; it won\'t be included in your bundle if it\'s not imported and used.

---

## 🛠️ Contributing

We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
git clone https://github.com/malikrajat/rm-ng-structure-pdf.git
cd rm-ng-structure-pdf
npm install
npm start  # Serves test app on localhost:4200
```

### Project Structure

```
projects/
├── @codewithrajat/rm-ng-structure-pdf/              # Library source code
│   ├── src/lib/         
│   │   ├── pdf-service.ts
│   │   └── pdf-options.types.ts
│   └── public-api.ts
└── pdf-structure/        # Test application
```

---

## 📖 Documentation

- [API Reference](docs/API.md)
- [Migration Guide](docs/MIGRATION.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)
- [Examples Repository](https://github.com/malikrajat/rm-ng-structure-pdf-examples)

---

## 🐛 Issues & Support

- 🐛 [Report Bug](https://github.com/malikrajat/rm-ng-structure-pdf/issues/new?template=bug_report.md)
- 💡 [Request Feature](https://github.com/malikrajat/rm-ng-structure-pdf/issues/new?template=feature_request.md)
- 💬 [Discussions](https://github.com/malikrajat/rm-ng-structure-pdf/discussions)
- 📧 [Email Support](mailto:mr.rajatmalik@gmail.com?subject=rm-ng-structure-pdf%20Support)

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Rajat Malik**
- 🌐 Website: [rajatmalik.dev](https://rajatmalik.dev)
- 📧 Email: [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/errajatmalik)

---

## 🙏 Acknowledgments

Built with gratitude for the open-source community:

- **[jsPDF](https://github.com/parallax/jsPDF)** - Core PDF generation
- **[html2canvas](https://github.com/niklasvh/html2canvas)** - HTML to image rendering
- **[Angular Team](https://angular.io/)** - Amazing framework and ecosystem
- **Contributors** - Thank you for making this library better!

---

<div align="center">

**Built with ❤️ for the Angular community**

⭐ Star this repo if it helped you! | 🐦 [Share on Twitter](https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20Angular%20PDF%20library!&url=https://github.com/malikrajat/rm-ng-structure-pdf)

</div>