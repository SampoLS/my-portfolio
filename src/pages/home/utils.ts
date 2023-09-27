export function appendLetter(span: HTMLElement, text: Array<string>, initialTimer: number) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            if (span) span.textContent += text[i];
        }, initialTimer + i * 100);
    }
}
