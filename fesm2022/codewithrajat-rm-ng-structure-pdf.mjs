import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const PAGE_SIZES = {
    a4: { width: 595.28, height: 841.89 },
    letter: { width: 612, height: 792 },
    legal: { width: 612, height: 1008 },
};
class PdfService {
    async generatePaginatedPdf(element, options) {
        // Ensure fonts are loaded before generating the PDF
        await document.fonts.ready;
        const { pageSize, orientation, fileName, author, title } = options;
        // 1. CLONE THE ELEMENT AND EMBED STYLES
        const clonedElement = this.cloneAndStyleElement(element);
        document.body.appendChild(clonedElement);
        try {
            const pageDimensions = PAGE_SIZES[pageSize];
            const pdf = new jsPDF({
                orientation,
                unit: 'pt',
                format: pageSize,
            });
            const pdfWidth = orientation === 'landscape' ? pageDimensions.height : pageDimensions.width;
            const pdfHeight = orientation === 'landscape' ? pageDimensions.width : pageDimensions.height;
            // 2. RENDER THE CLONED, FULLY-STYLED ELEMENT
            const canvas = await html2canvas(clonedElement, {
                scale: 2,
                useCORS: true,
                logging: false,
                width: clonedElement.scrollWidth,
                height: clonedElement.scrollHeight,
                windowWidth: clonedElement.scrollWidth,
                windowHeight: clonedElement.scrollHeight,
            });
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let position = 0;
            let pageCount = 0;
            // 3. PAGINATE THE RESULTING IMAGE
            while (position < imgHeight) {
                pageCount++;
                if (pageCount > 1) {
                    pdf.addPage();
                }
                const sliceHeight = Math.min(pdfHeight, imgHeight - position);
                pdf.addImage(imgData, 'PNG', 0, -position, imgWidth, imgHeight);
                position += sliceHeight;
            }
            pdf.setProperties({ title, author });
            pdf.save(fileName);
        }
        catch (error) {
            console.error("Error generating the paginated PDF:", error);
        }
        finally {
            // 4. CLEANUP: Remove the cloned element from the DOM
            document.body.removeChild(clonedElement);
        }
    }
    /**
     * Clones the target element and embeds all document stylesheets into it.
     * This ensures html2canvas renders with all styles applied.
     */
    cloneAndStyleElement(element) {
        const clonedElement = element.cloneNode(true);
        // Create a style element
        const style = document.createElement('style');
        let css = '';
        // Iterate through all stylesheets in the document
        for (const sheet of Array.from(document.styleSheets)) {
            try {
                if (sheet.cssRules) {
                    for (const rule of Array.from(sheet.cssRules)) {
                        css += rule.cssText;
                    }
                }
            }
            catch (e) {
                console.warn('Could not read stylesheet rules:', e);
            }
        }
        style.textContent = css;
        clonedElement.appendChild(style);
        // Apply inline styles to the clone for absolute positioning off-screen
        clonedElement.style.position = 'absolute';
        clonedElement.style.left = '-9999px';
        clonedElement.style.top = '0px';
        clonedElement.style.width = `${element.offsetWidth}px`;
        return clonedElement;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.0-next.5", ngImport: i0, type: PdfService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.0.0-next.5", ngImport: i0, type: PdfService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.0-next.5", ngImport: i0, type: PdfService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

/*
 * Public API Surface of rm-ng-structure-pdf
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PdfService };
//# sourceMappingURL=codewithrajat-rm-ng-structure-pdf.mjs.map
