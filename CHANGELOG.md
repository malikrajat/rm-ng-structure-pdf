```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-12-7

### Added

- **Angular 21 Support**: Full compatibility with Angular 21 and all its features
- **Enhanced Documentation**: 
  - Comprehensive README with detailed usage examples
  - Added API reference documentation
  - Created migration guide for upgrading from v1.x
  - Added troubleshooting guide with common issues and solutions
  - Included best practices section for optimal PDF generation
- **License File**: Added formal MIT License file to the repository
- **Advanced Examples**:
  - Invoice generation example with complete implementation
  - Dashboard report with charts example
  - Multi-page document example
  - Dynamic content handling examples
- **Performance Improvements**:
  - Optimized rendering pipeline for faster PDF generation
  - Improved memory management for large documents
  - Enhanced image loading and processing
  - Better handling of complex layouts
- **TypeScript Definitions**: Enhanced type definitions for better IDE support
- **Error Handling**: Improved error messages and debugging information

### Changed

- **README Structure**: Completely reorganized README for better readability
  - Added clear sections for installation, usage, and configuration
  - Included visual examples and code snippets
  - Enhanced compatibility matrix
  - Added detailed best practices section
  - Improved troubleshooting section
- **Documentation Format**: Removed excessive emoji usage for professional appearance
- **Code Examples**: Updated all examples to follow Angular best practices
- **Performance**: Optimized PDF generation process for better speed and reliability
- **Styling Guide**: Enhanced CSS recommendations for PDF-friendly content

### Improved

- **Visual Output**: Better preservation of HTML/CSS styling in PDF output
- **Font Rendering**: Improved font loading and rendering consistency
- **Image Quality**: Enhanced image processing for clearer PDF output
- **Table Handling**: Better support for complex table structures
- **Color Accuracy**: Improved color reproduction in generated PDFs

### Fixed

- Minor bugs in style cloning process
- Font loading race conditions
- Memory leaks in large document generation
- Edge cases in pagination logic

### Deprecated

- Support for Angular versions below 14.x (still functional but not actively tested)

### Security

- Updated all dependencies to latest secure versions
- Addressed potential XSS vulnerabilities in HTML content handling

## [1.0.0] - 2025-09-26

### Added

- **HTML to PDF Generation**: Core functionality to convert an HTML element into a paginated PDF document
- **Custom PDF Options**:
  - Set custom file names for generated PDFs
  - Choose between page sizes: `a4`, `letter`, and `legal`
  - Select page orientation: `portrait` or `landscape`
  - Add `author` and `title` metadata to the PDF
- **Automatic Pagination**: Automatically splits content across multiple pages based on the selected page size
- **Style Preservation**: Clones the target HTML element and embeds all document stylesheets to ensure the PDF output matches the on-screen rendering
- **Font Loading**: Waits for all fonts to be loaded before starting the PDF generation to prevent rendering issues
- **Angular 14+ Support**: Full compatibility with Angular 14 and higher versions
- **Standalone Component Support**: Works with both module-based and standalone Angular components
- **Tree-Shaking Support**: Optimized for minimal bundle size impact
- **TypeScript Support**: Full type definitions included

### Technical Details

- Uses jsPDF for PDF generation engine
- Uses html2canvas for HTML to canvas rendering
- Client-side processing without backend requirements
- Service-based architecture for easy integration

---

## Upgrade Guide

### Upgrading from 1.x to 2.0

**Breaking Changes**: None. Version 2.0 is fully backward compatible with 1.x.

**Recommended Updates**:

1. Update Angular to version 21:
```bash
ng update @angular/core@21 @angular/cli@21
```

2. Update the library:
```bash
npm install @codewithrajat/rm-ng-structure-pdf@latest
```

3. Review the updated documentation for new best practices and examples

4. Test your existing PDF generation functionality to ensure compatibility

**New Features Available**:

- Enhanced performance for large documents
- Improved error handling and debugging
- Better documentation and examples
- Updated TypeScript definitions

**Migration Steps**:

1. No code changes required for basic functionality
2. Review new best practices in the updated README
3. Consider implementing recommended error handling patterns
4. Test with Angular 21 in your development environment
5. Update any custom styling based on new recommendations

---

## Version History

| Version | Release Date | Angular Support | Status |
|---------|--------------|-----------------|--------|
| 2.0.0 | 2025-11-30 | 14.x - 21.x | Current |
| 1.0.0 | 2025-09-26 | 14.x - 20.x | Maintenance |

---

## Support Policy

- **Current Version (2.0.x)**: Full support with regular updates
- **Previous Version (1.0.x)**: Security updates only
- **Older Versions**: No longer supported

For issues and feature requests, please visit our [GitHub Issues](https://github.com/malikrajat/rm-ng-structure-pdf/issues) page.

---

## Contributors

Thank you to all contributors who helped make version 2.0 possible:

- Rajat Malik - Lead Developer
- Community contributors - Bug reports and feedback

---

[2.0.0]: https://github.com/malikrajat/rm-ng-structure-pdf/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/malikrajat/rm-ng-structure-pdf/releases/tag/v1.0.0
```