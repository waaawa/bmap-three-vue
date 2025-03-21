export class Ws {
    constructor(arg?: {
        needToken: boolean;
    });
    lockReconnect: boolean;
    connectNumber: number;
    ws: WebSocket | null;
    maxConnectNumber: number;
    beforeReconnect: any;
    disposeStatus: boolean;
    needToken: boolean;
    bindObj: any;
    recentMessage: any;
    timeout: number;
    timeoutObj: NodeJS.Timeout | null;
    serverTimeoutObj: NodeJS.Timeout | null;
    reconnect(url: any, params: any): void;
    connect(url: any, params: any, msgFn: any): Promise<any>;
    dispose(): void;
    heartReset(): Ws;
    heartStart(curWs: any): void;
}
