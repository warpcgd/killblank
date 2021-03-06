/// <reference types="node" />
import http from 'http';
import express from 'express';
declare class Server {
    option: Options | null;
    listenServer: http.Server | null;
    app: express.Application | null;
    constructor(option: Options);
    private init;
    createServer(): void;
    initRouters(): Promise<void>;
    destroy(): void;
}
export default Server;
