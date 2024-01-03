declare var WasmGoCurrentTimeFormat: (
    layout: string
) => Promise<string>;

export function goCurrentTimeFormat(layout: string): Promise<string> {
    return WasmGoCurrentTimeFormat(layout);
}