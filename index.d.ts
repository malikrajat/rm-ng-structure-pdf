import * as i0 from '@angular/core';

type PageSize = 'a4' | 'letter' | 'legal';
type Orientation = 'portrait' | 'landscape';
interface PdfOptions {
    fileName: string;
    pageSize: PageSize;
    orientation: Orientation;
    author: string;
    title: string;
}

declare class PdfService {
    generatePaginatedPdf(element: HTMLElement, options: PdfOptions): Promise<void>;
    /**
     * Clones the target element and embeds all document stylesheets into it.
     * This ensures html2canvas renders with all styles applied.
     */
    private cloneAndStyleElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<PdfService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PdfService>;
}

export { PdfService };
export type { Orientation, PageSize, PdfOptions };
