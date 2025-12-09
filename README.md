# @codewithrajat/rm-ng-structure-pdf

[![npm version](https://img.shields.io/npm/v/@codewithrajat/rm-ng-structure-pdf.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![Angular Support](https://img.shields.io/badge/angular-^14.0.0-brightgreen)
![Tree-shakable](https://img.shields.io/badge/tree--shaking-supported-success)
![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)
[![Downloads](https://img.shields.io/npm/dm/@codewithrajat/rm-ng-structure-pdf.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf)

---

`@codewithrajat/rm-ng-structure-pdf` is an Angular library designed to create truly structured, searchable, and accessible PDFs directly from HTML content. Unlike simple screenshot-based solutions, this library focuses on generating text-based, searchable documents that preserve content structure and accessibility.

## Important Note

If you need a stable, production-ready PDF generator for read-only documents, consider using [`@codewithrajat/rm-ng-structure-pdf`](https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf). 

The current library, `@codewithrajat/rm-ng-structure-pdf`, is focused on advancing the future of searchable, text-based PDF generation. While functional, it currently uses an image-slicing approach that may cut content at page boundaries. Future versions will implement intelligent content-aware page breaking.

---


##  See It In Action

<div align="center">
  
  <img src="https://github.com/malikrajat/rm-image-slider/blob/main/assets/export-csv.gif" alt="rm-ng-structure-pdf Demo" width="800"/>

</div>

---

##  Live Demo & Playground

###  Try it yourself! Interactive demos available now:

<div align="left">

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://stackblitz.com/edit/stackblitz-starters-lqnzau6p" target="_blank">
        <img src="https://img.shields.io/badge/⚡_StackBlitz_Demo-1976D2?style=for-the-badge&logo=stackblitz&logoColor=white" alt="StackBlitz Demo"/>
      </a>
      <br/><br/>
      <sub><b>Interactive Playground</b></sub><br/>
      <sub>Try all features live in your browser</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://github.com/malikrajat/rm-ng-structure-pdf/tree/main/examples" target="_blank">
        <img src="https://img.shields.io/badge/📚_Code_Examples-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Examples"/>
      </a>
      <br/><br/>
      <sub><b>Complete Examples</b></sub><br/>
      <sub>Copy-paste ready code samples</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <a href="https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf" target="_blank">
        <img src="https://img.shields.io/badge/📦_npm_Package-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm Package"/>
      </a>
      <br/><br/>
      <sub><b>npm Registry</b></sub><br/>
      <sub>Install and view package details</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://github.com/malikrajat/rm-ng-structure-pdf" target="_blank">
        <img src="https://img.shields.io/badge/⭐_GitHub_Repo-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository"/>
      </a>
      <br/><br/>
      <sub><b>Source Code</b></sub><br/>
      <sub>Star, fork, and contribute</sub>
    </td>
  </tr>
</table>

</div>

---


## Key Benefits

- **Client-Side Generation**: Creates PDFs entirely in the browser without requiring a backend server
- **Searchable Text**: Generates PDFs with real, selectable text rather than images
- **Accessibility**: Produces documents compatible with screen readers and assistive technologies
- **Style Preservation**: Maintains HTML and CSS styling in the final PDF output
- **Framework Integration**: Designed specifically for Angular applications with full TypeScript support

## Ideal Use Cases

- Generating reports, dashboards, and analytics exports
- Creating invoices, receipts, and financial documents
- Producing printable documentation from web content
- Building applications that require professional PDF exports
- Teams seeking long-term solutions for dynamic and accessible PDF generation

---

## Features

| Feature | Description | Status |
|---------|-------------|---------|
| Searchable Text | Generate PDFs with selectable, searchable content | Available |
| Accessibility | Screen reader compatible documents | Available |
| Style Preservation | Maintain HTML/CSS styling in PDF output | Available |
| Smart Pagination | Intelligent page breaking and content flow | In Development |
| Configurable Options | Flexible page sizes, orientation, and metadata | Available |
| Tree-Shakable | Optimized bundle size | Available |
| Client-Side Processing | No backend server required | Available |
| TypeScript Support | Full type definitions included | Available |

---

## Installation

### Using Package Managers

Install the library using your preferred package manager:

```bash
# npm
npm install @codewithrajat/rm-ng-structure-pdf

# yarn
yarn add @codewithrajat/rm-ng-structure-pdf

# pnpm
pnpm add @codewithrajat/rm-ng-structure-pdf
```

### Required Peer Dependencies

The library requires the following peer dependencies:

```bash
npm install jspdf html2canvas
```

### Dependency Overview

| Dependency | Minimum Version | Purpose |
|------------|-----------------|---------|
| `@angular/core` | ^14.0.0 | Angular framework |
| `jspdf` | ^2.5.1 | PDF generation engine |
| `html2canvas` | ^1.4.1 | HTML to canvas rendering |

---

## Compatibility

### Angular Version Support

| Angular Version | Compatible | Standalone Components | Notes |
|-----------------|------------|-----------------------|-------|
| 14.x | Yes | Yes | Minimum required version |
| 15.x | Yes | Yes | Fully tested |
| 16.x | Yes | Yes | Fully tested |
| 17.x | Yes | Yes | Fully tested |
| 18.x+ | Expected | Yes | Should work without issues |

### Browser Support

| Browser | Minimum Version | Support Level |
|---------|-----------------|---------------|
| Chrome | 80+ | Full |
| Firefox | 75+ | Full |
| Safari | 13+ | Full |
| Edge | 80+ | Full |
| Opera | 67+ | Full |

### Platform Support

- Desktop browsers (Windows, macOS, Linux)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive Web Apps (PWAs)
- Electron applications
- Hybrid mobile applications (Ionic, Capacitor)

---

## Quick Start

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
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product A</td>
            <td>5</td>
            <td>$50.00</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button (click)="exportToPdf()" class="export-btn">
      Export to PDF
    </button>
  `
})
export class ReportComponent {
  @ViewChild('pdfContent') contentRef!: ElementRef<HTMLDivElement>;

  constructor(private pdfService: PdfService) {}

  exportToPdf(): void {
    const options: PdfOptions = {
      fileName: 'report.pdf',
      pageSize: 'a4',
      orientation: 'portrait',
      title: 'My Report',
      author: 'My Application'
    };

    this.pdfService.generatePaginatedPdf(
      this.contentRef.nativeElement, 
      options
    );
  }
}
```

### Service Registration

#### For Standalone Components

```typescript
import { Component } from '@angular/core';
import { PdfService } from '@codewithrajat/rm-ng-structure-pdf';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [PdfService],
  template: `...`
})
export class AppComponent {}
```

#### For Module-Based Applications

```typescript
import { NgModule } from '@angular/core';
import { PdfService } from '@codewithrajat/rm-ng-structure-pdf';

@NgModule({
  declarations: [AppComponent],
  providers: [PdfService],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

---

## Configuration Options

### PdfOptions Interface

```typescript
interface PdfOptions {
  fileName: string;           // Output file name (with .pdf extension)
  pageSize: PageSize;         // Document page size
  orientation: Orientation;   // Page orientation
  title: string;             // PDF metadata title
  author: string;            // PDF metadata author
}

type PageSize = 'a4' | 'letter' | 'legal';
type Orientation = 'portrait' | 'landscape';
```

### Configuration Reference

| Option | Type | Description | Required | Example |
|--------|------|-------------|----------|---------|
| `fileName` | `string` | Name of the downloaded file | Yes | `'invoice-2024.pdf'` |
| `pageSize` | `'a4' \| 'letter' \| 'legal'` | Standard page size | Yes | `'a4'` |
| `orientation` | `'portrait' \| 'landscape'` | Page orientation | Yes | `'portrait'` |
| `title` | `string` | PDF document title metadata | Yes | `'Monthly Report'` |
| `author` | `string` | PDF document author metadata | Yes | `'Company Name'` |

### Page Size Specifications

| Size | Portrait Dimensions | Landscape Dimensions | Common Use Cases |
|------|---------------------|----------------------|------------------|
| `a4` | 210 × 297 mm (8.27 × 11.69 in) | 297 × 210 mm | International standard, reports, letters |
| `letter` | 215.9 × 279.4 mm (8.5 × 11 in) | 279.4 × 215.9 mm | US standard documents |
| `legal` | 215.9 × 355.6 mm (8.5 × 14 in) | 355.6 × 215.9 mm | Legal documents, contracts |

### Choosing Page Size

- **A4**: Use for international audiences or European markets
- **Letter**: Use for US-based documents and standard business correspondence
- **Legal**: Use for contracts, legal documents, or content requiring extra vertical space

### Choosing Orientation

- **Portrait**: Best for text-heavy documents, reports, and standard forms
- **Landscape**: Best for wide tables, charts, dashboards, and presentations

---

## Usage Examples

### Invoice Generation

```typescript
import { Component, ElementRef, ViewChild } from '@angular/core';
import { PdfService, PdfOptions } from '@codewithrajat/rm-ng-structure-pdf';

@Component({
  selector: 'app-invoice',
  template: `
    <div #invoice class="invoice">
      <header class="invoice-header">
        <h1>Invoice #{{invoiceNumber}}</h1>
        <div class="company-info">
          <h2>{{companyName}}</h2>
          <p>{{companyAddress}}</p>
        </div>
      </header>
      
      <section class="client-info">
        <h3>Bill To:</h3>
        <p>{{clientName}}</p>
        <p>{{clientAddress}}</p>
      </section>
      
      <table class="invoice-items">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of items">
            <td>{{item.description}}</td>
            <td>{{item.quantity}}</td>
            <td>{{item.rate | currency}}</td>
            <td>{{item.amount | currency}}</td>
          </tr>
        </tbody>
      </table>
      
      <footer class="invoice-footer">
        <div class="subtotal">Subtotal: {{subtotal | currency}}</div>
        <div class="tax">Tax: {{tax | currency}}</div>
        <div class="total">Total: {{total | currency}}</div>
      </footer>
    </div>
    
    <button (click)="exportInvoice()">Download Invoice</button>
  `
})
export class InvoiceComponent {
  @ViewChild('invoice') invoiceRef!: ElementRef<HTMLDivElement>;
  
  invoiceNumber = 'INV-2024-001';
  companyName = 'Your Company';
  // ... other properties
  
  constructor(private pdfService: PdfService) {}
  
  exportInvoice(): void {
    const options: PdfOptions = {
      fileName: `invoice-${this.invoiceNumber}.pdf`,
      pageSize: 'letter',
      orientation: 'portrait',
      title: `Invoice ${this.invoiceNumber}`,
      author: this.companyName
    };
    
    this.pdfService.generatePaginatedPdf(
      this.invoiceRef.nativeElement,
      options
    );
  }
}
```

### Dashboard Report with Charts

```typescript
import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { PdfService, PdfOptions } from '@codewithrajat/rm-ng-structure-pdf';

@Component({
  selector: 'app-dashboard',
  template: `
    <div #report class="report">
      <h1>Monthly Dashboard Report</h1>
      
      <section class="charts">
        <div class="chart-container">
          <h2>Sales Overview</h2>
          <canvas #salesChart></canvas>
        </div>
        <div class="chart-container">
          <h2>Revenue Trends</h2>
          <canvas #revenueChart></canvas>
        </div>
      </section>
      
      <section class="data-tables">
        <h2>Detailed Metrics</h2>
        <table>
          <!-- Table content -->
        </table>
      </section>
    </div>
    
    <button (click)="exportReport()">Export Report</button>
  `
})
export class DashboardComponent {
  @ViewChild('report') reportRef!: ElementRef<HTMLDivElement>;
  
  constructor(
    private pdfService: PdfService,
    private cdr: ChangeDetectorRef
  ) {}
  
  async exportReport(): Promise<void> {
    // Ensure all charts are fully rendered
    await this.waitForChartsToRender();
    
    // Trigger change detection
    this.cdr.detectChanges();
    
    // Small delay to ensure rendering is complete
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const options: PdfOptions = {
      fileName: `dashboard-report-${this.getFormattedDate()}.pdf`,
      pageSize: 'a4',
      orientation: 'landscape',
      title: 'Monthly Dashboard Report',
      author: 'Analytics Team'
    };
    
    this.pdfService.generatePaginatedPdf(
      this.reportRef.nativeElement,
      options
    );
  }
  
  private async waitForChartsToRender(): Promise<void> {
    // Implementation depends on your charting library
    // Example: wait for chart animation to complete
    return new Promise(resolve => setTimeout(resolve, 500));
  }
  
  private getFormattedDate(): string {
    return new Date().toISOString().split('T')[0];
  }
}
```

### Multi-Page Document

```typescript
import { Component, ElementRef, ViewChild } from '@angular/core';
import { PdfService, PdfOptions } from '@codewithrajat/rm-ng-structure-pdf';

@Component({
  selector: 'app-document',
  template: `
    <div #document class="document">
      <section class="cover-page">
        <h1>Annual Report 2024</h1>
        <p class="subtitle">Company Overview and Financial Performance</p>
      </section>
      
      <section class="executive-summary">
        <h2>Executive Summary</h2>
        <p><!-- Content --></p>
      </section>
      
      <section class="financial-data">
        <h2>Financial Performance</h2>
        <div class="charts"><!-- Charts --></div>
        <table><!-- Financial tables --></table>
      </section>
      
      <section class="appendix">
        <h2>Appendix</h2>
        <p><!-- Additional information --></p>
      </section>
    </div>
    
    <button (click)="exportDocument()">Export Document</button>
  `
})
export class DocumentComponent {
  @ViewChild('document') documentRef!: ElementRef<HTMLDivElement>;
  
  constructor(private pdfService: PdfService) {}
  
  exportDocument(): void {
    const options: PdfOptions = {
      fileName: 'annual-report-2024.pdf',
      pageSize: 'a4',
      orientation: 'portrait',
      title: 'Annual Report 2024',
      author: 'Company Name'
    };
    
    this.pdfService.generatePaginatedPdf(
      this.documentRef.nativeElement,
      options
    );
  }
}
```

---

## Best Practices

### Understanding Current Limitations

The current version uses an image-slicing technique that renders HTML to a large image and divides it into page-sized chunks. This means content may be cut at page boundaries.

### Recommended Approaches

#### Structure Your Content

```html
<!-- Good: Modular sections with spacing -->
<div class="section" style="margin-bottom: 30px;">
  <h2>Section Title</h2>
  <p>Content that fits within a reasonable height</p>
  <table><!-- Compact table --></table>
</div>

<div class="section" style="margin-bottom: 30px;">
  <h2>Next Section</h2>
  <p>Each section is self-contained</p>
</div>

<!-- Good: Visual separators between sections -->
<hr style="margin: 40px 0; border: 1px solid #e0e0e0;" />
```

#### Avoid Problematic Patterns

```html
<!-- Avoid: Very tall single elements -->
<div style="height: 2000px;">
  <!-- This will likely be cut across multiple pages -->
</div>

<!-- Avoid: Long unbroken text blocks -->
<div style="height: 1500px;">
  <p>Very long paragraph...</p>
</div>

<!-- Note: CSS page-break properties don't work in current version -->
<div style="page-break-before: always;">
  <!-- This will not create a page break -->
</div>

<div style="page-break-inside: avoid;">
  <!-- This will not prevent content from breaking -->
</div>
```

### Styling for PDF Export

#### Recommended Styles

```css
/* PDF-friendly content container */
.pdf-content {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #333333;
  background: #ffffff;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

/* Clear section separation */
.pdf-section {
  margin-bottom: 30px;
  padding: 15px;
}

/* Table styling */
.pdf-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.pdf-table th,
.pdf-table td {
  padding: 8px 12px;
  border: 1px solid #dddddd;
  text-align: left;
}

.pdf-table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

/* Headers */
.pdf-content h1 {
  font-size: 24px;
  margin-bottom: 16px;
  color: #000000;
}

.pdf-content h2 {
  font-size: 20px;
  margin-bottom: 12px;
  color: #000000;
}

.pdf-content h3 {
  font-size: 16px;
  margin-bottom: 8px;
  color: #000000;
}
```

#### Styles to Avoid

```css
/* Avoid: Complex positioning */
.avoid-fixed {
  position: fixed;
  position: sticky;
}

/* Avoid: Complex transforms */
.avoid-transforms {
  transform: scale(0.8) rotate(5deg);
  transform-origin: center;
}

/* Avoid: Advanced filters */
.avoid-filters {
  filter: blur(2px);
  backdrop-filter: blur(10px);
}

/* Avoid: Complex shadows */
.avoid-shadows {
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

/* Avoid: Transparent backgrounds on text */
.avoid-transparency {
  background: rgba(255,255,255,0.5);
  opacity: 0.8;
}

/* Avoid: Flexbox/Grid with complex layouts */
.avoid-complex-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

### Handling Dynamic Content

#### Wait for Content to Load

```typescript
async exportToPdf(): Promise<void> {
  // Wait for images to load
  await this.waitForImages();
  
  // Wait for dynamic content
  this.cdr.detectChanges();
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Generate PDF
  this.pdfService.generatePaginatedPdf(
    this.contentRef.nativeElement,
    this.options
  );
}

private waitForImages(): Promise<void> {
  const images = this.contentRef.nativeElement.querySelectorAll('img');
  const promises = Array.from(images).map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(resolve => {
      img.onload = resolve;
      img.onerror = resolve;
    });
  });
  return Promise.all(promises).then(() => {});
}
```

#### Handle Charts and Visualizations

```typescript
async exportWithCharts(): Promise<void> {
  // Ensure charts are rendered
  await this.renderCharts();
  
  // Wait for chart animations to complete
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Generate PDF
  this.pdfService.generatePaginatedPdf(
    this.contentRef.nativeElement,
    this.options
  );
}
```

### Content Organization Tips

1. **Keep sections modular**: Design content in self-contained blocks under 800px in height
2. **Add visual separators**: Use horizontal rules or spacing between major sections
3. **Test with varying content**: Export PDFs with different amounts of content to identify break points
4. **Design mobile-first**: Narrower content often exports more reliably
5. **Use consistent spacing**: Maintain uniform margins and padding throughout
6. **Optimize images**: Use compressed images at appropriate resolutions
7. **Limit table complexity**: Break large tables into smaller chunks when possible

---

## Advanced Usage

### Error Handling

```typescript
async exportToPdf(): Promise<void> {
  try {
    await this.pdfService.generatePaginatedPdf(
      this.contentRef.nativeElement,
      this.options
    );
    this.showSuccessMessage('PDF exported successfully');
  } catch (error) {
    console.error('PDF generation failed:', error);
    this.showErrorMessage('Failed to generate PDF. Please try again.');
  }
}
```

### Loading Indicators

```typescript
isGeneratingPdf = false;

async exportToPdf(): Promise<void> {
  this.isGeneratingPdf = true;
  
  try {
    await this.pdfService.generatePaginatedPdf(
      this.contentRef.nativeElement,
      this.options
    );
  } finally {
    this.isGeneratingPdf = false;
  }
}
```

### Dynamic File Names

```typescript
exportToPdf(): void {
  const timestamp = new Date().toISOString().split('T')[0];
  const username = this.authService.getCurrentUser().name;
  
  const options: PdfOptions = {
    fileName: `report-${username}-${timestamp}.pdf`,
    pageSize: 'a4',
    orientation: 'portrait',
    title: `Report for ${username}`,
    author: username
  };
  
  this.pdfService.generatePaginatedPdf(
    this.contentRef.nativeElement,
    options
  );
}
```

### Conditional Styling for PDF

```typescript
isPdfMode = false;

preparePdfExport(): void {
  this.isPdfMode = true;
  this.cdr.detectChanges();
}

async exportToPdf(): Promise<void> {
  this.preparePdfExport();
  
  await new Promise(resolve => setTimeout(resolve, 100));
  
  await this.pdfService.generatePaginatedPdf(
    this.contentRef.nativeElement,
    this.options
  );
  
  this.isPdfMode = false;
}
```

```html
<div [class.pdf-mode]="isPdfMode">
  <!-- Content with PDF-specific styling -->
</div>
```

---

## Smart Page Breaking: Vision and Roadmap

### The Vision

The ultimate goal for this library is intelligent, content-aware page breaking:

- **Content Boundary Detection**: Automatically identify and respect element boundaries
- **CSS Property Support**: Honor standard CSS `page-break-*` properties
- **Visual Element Preservation**: Keep cards, images, tables, and sections intact
- **Widow/Orphan Control**: Prevent awkward single lines at page breaks
- **Header/Footer Repetition**: Support for repeating headers and footers on each page

---

## Performance Considerations

### Optimization Tips

1. **Image Optimization**: Compress images before including them in PDF content
2. **Content Complexity**: Simpler layouts render faster and more reliably
3. **Font Selection**: Web-safe fonts render more consistently
4. **DOM Size**: Limit the number of elements in the PDF content area
5. **Chart Rendering**: Allow sufficient time for charts to render before export

### Memory Management

For large documents:

```typescript
async exportLargeDocument(): Promise<void> {
  // Clear any cached data
  this.clearCache();
  
  // Generate PDF
  await this.pdfService.generatePaginatedPdf(
    this.contentRef.nativeElement,
    this.options
  );
  
  // Clean up after generation
  this.cleanup();
}
```

### Bundle Size

The library is optimized for tree-shaking:

- Base library: ~5KB (minified + gzipped)
- jsPDF dependency: ~60KB (minified + gzipped)
- html2canvas dependency: ~30KB (minified + gzipped)

Total bundle impact: approximately 95KB when using the service.

---

## Migration Guide

### From rm-ng-structure-pdf

If migrating from `@codewithrajat/rm-ng-structure-pdf`:

1. Update imports:
```typescript
// Old
import { PdfService } from '@codewithrajat/rm-ng-structure-pdf';

// New
import { PdfService } from '@codewithrajat/rm-ng-structure-pdf';
```

2. Update method calls (if API differs):
```typescript
// Check the method signature matches
this.pdfService.generatePaginatedPdf(element, options);
```

3. Test thoroughly: The underlying implementation may differ

---

## Tree-Shaking and Optimization

The library is fully optimized for modern build tools:

- Marked as `sideEffects: false` in package.json
- Service-based API is naturally tree-shakable
- Only imported code is included in your bundle
- Full TypeScript support for type checking and optimization

### Webpack Configuration

No special configuration needed. The library works out-of-the-box with Angular CLI's default Webpack setup.

### Build Output

When building for production:

```bash
ng build --configuration production
```

The library code will be automatically tree-shaken and minified.

---

## Contributing

Contributions are welcome and appreciated. See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/malikrajat/rm-ng-structure-pdf.git

# Navigate to the project directory
cd rm-ng-structure-pdf

# Install dependencies
npm install

# Start the development server
npm start

# The test application will be available at http://localhost:4200
```

### Project Structure

```
rm-ng-structure-pdf/
├── projects/
│   ├── @codewithrajat/rm-ng-structure-pdf/   # Library source
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── pdf.service.ts
│   │   │   │   └── pdf-options.types.ts
│   │   │   └── public-api.ts
│   │   ├── package.json
│   │   └── ng-package.json
│   └── pdf-structure/                        # Test application
│       └── src/
├── docs/                                     # Documentation
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

### Running Tests

```bash
# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage

# Run end-to-end tests
npm run e2e
```

### Building the Library

```bash
# Build the library
npm run build:lib

# The output will be in dist/@codewithrajat/rm-ng-structure-pdf/
```

### Submitting Changes

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

---

## Documentation

- [API Reference](docs/API.md) - Complete API documentation
- [Migration Guide](docs/MIGRATION.md) - Upgrading from previous versions
- [Troubleshooting](docs/TROUBLESHOOTING.md) - Common issues and solutions
- [Examples Repository](https://github.com/malikrajat/rm-ng-structure-pdf-examples) - Sample implementations
- [Changelog](CHANGELOG.md) - Version history and changes

---

## Support and Community

### Getting Help

- Report bugs: [GitHub Issues](https://github.com/malikrajat/rm-ng-structure-pdf/issues/new?template=bug_report.md)
- Request features: [Feature Requests](https://github.com/malikrajat/rm-ng-structure-pdf/issues/new?template=feature_request.md)
- Ask questions: [Discussions](https://github.com/malikrajat/rm-ng-structure-pdf/discussions)
- Email support: [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com?subject=rm-ng-structure-pdf%20Support)

### Stay Updated

- Follow the project on [GitHub](https://github.com/malikrajat/rm-ng-structure-pdf)
- Star the repository for updates
- Watch for new releases

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for complete details.

### MIT License Summary

- Commercial use allowed
- Modification allowed
- Distribution allowed
- Private use allowed
- Liability and warranty limitations apply

---

## Author

**Rajat Malik**

- Website: [rajatmalik.dev](https://rajatmalik.dev)
- Email: [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com)
- LinkedIn: [errajatmalik](https://linkedin.com/in/errajatmalik)
- GitHub: [@malikrajat](https://github.com/malikrajat)

---

## Acknowledgments

This library is built with gratitude for the open-source community and the following projects:

- **[jsPDF](https://github.com/parallax/jsPDF)** - The core PDF generation engine
- **[html2canvas](https://github.com/niklasvh/html2canvas)** - HTML to canvas rendering capability
- **[Angular](https://angular.io/)** - The powerful framework that makes this integration possible
- **All Contributors** - Thank you for improving this library through issues, PRs, and feedback

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes.

### Latest Release

Check the [releases page](https://github.com/malikrajat/rm-ng-structure-pdf/releases) for the most recent version and updates.

---

## Roadmap

### Short-term Goals

- Improve documentation with more examples
- Add comprehensive test coverage
- Create video tutorials
- Build sample applications

### Medium-term Goals

- Implement content-aware page breaking
- Add support for CSS page-break properties
- Improve table handling and splitting
- Add header/footer support

### Long-term Goals

- Full structural PDF support (beyond image-based)
- Advanced typography options
- Form field support
- Interactive PDF elements

Community feedback helps prioritize these features. Share your needs in [Discussions](https://github.com/malikrajat/rm-ng-structure-pdf/discussions).

---

## FAQ

**Q: What's the difference between rm-ng-structure-pdf and rm-ng-structure-pdf?**

A: `rm-ng-structure-pdf` is stable and focused on reliable screenshot-to-PDF conversion. `rm-ng-structure-pdf` is the next generation, working toward truly structured, searchable PDFs with text selection and accessibility features.

**Q: Can I use this in production?**

A: Yes, but be aware of the current limitations regarding page breaking. Test thoroughly with your content.

**Q: Does this work with server-side rendering (SSR)?**

A: PDF generation requires a browser environment. For SSR applications, ensure PDF generation only happens client-side.

**Q: Can I customize page margins?**

A: Custom margins are not yet supported but are planned for future releases.

**Q: Does this support headers and footers?**

A: Not yet, but this feature is on the roadmap.

**Q: Can I add page numbers?**

A: Automatic page numbering is not currently available but is planned.

**Q: What's the maximum content size I can export?**

A: This depends on browser memory limits. For very large documents, consider splitting into multiple PDFs.

**Q: Can I generate PDFs in the background?**

A: PDF generation requires the content to be rendered in the DOM, so it cannot be entirely backgrounded.

---

Built with care for the Angular community.

If this library helps your project, consider starring the repository on [GitHub](https://github.com/malikrajat/rm-ng-structure-pdf).